//npm install raspberrypi-liquid-crystal
const NFC = require('nfc-pcsc').NFC;
const LCD = require('raspberrypi-liquid-crystal');

const nfc = new NFC();
const lcd = new LCD(1, 0x27, 16, 2); // Pas de parameters aan op basis van je LCD-scherm

// Initialiseer LCD-scherm
lcd.beginSync();
lcd.printSync("Wacht op kaart...");

nfc.on('reader', reader => {
    console.log(`${reader.reader.name} reader is connected.`);

    reader.on('card', async card => {
        console.log(`Card detected:`, card);

        try {
            // Lees 16 bytes vanaf blok 4 van de kaart
            const block = 4;
            const length = 16;
            const data = await reader.read(block, length, 16);
            const text = data.toString().trim();

            console.log("Data gelezen van NFC-kaart:", text);

            // Wis het scherm en toon de gelezen data
            lcd.clearSync();
            lcd.printSync(`Data: ${text}`);
        } catch (err) {
            console.error("Fout bij lezen van kaart:", err);
            lcd.clearSync();
            lcd.printSync("Leesfout!");
        }
    });

    reader.on('error', err => {
        console.error("Reader error:", err);
        lcd.clearSync();
        lcd.printSync("Reader fout!");
    });

    reader.on('end', () => {
        console.log(`${reader.reader.name} reader is disconnected.`);
        lcd.clearSync();
        lcd.printSync("Reader ontkoppeld");
    });
});

nfc.on('error', err => {
    console.error("NFC error:", err);
    lcd.clearSync();
    lcd.printSync("NFC fout!");
});
