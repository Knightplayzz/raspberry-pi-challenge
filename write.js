//npm install nfc-pcsc

const NFC = require('nfc-pcsc').NFC;
const nfc = new NFC(); // Maak een nieuwe NFC instantie

nfc.on('reader', reader => {
    console.log(`${reader.reader.name} reader is connected.`);

    reader.on('card', async card => {
        console.log(`Card detected:`, card);

        // Voorbeelddata om te schrijven
        const dataToWrite = Buffer.from("Hello NFC");

        try {
            // Blok kiezen om naar te schrijven, afhankelijk van je kaart
            // (controleer de documentatie van je NFC-kaart)
            await reader.write(4, dataToWrite, 16); // Schrijf 16 bytes vanaf blok 4
            console.log("Data succesvol geschreven naar NFC-kaart.");
        } catch (err) {
            console.error("Fout bij schrijven naar kaart:", err);
        }
    });

    reader.on('error', err => {
        console.error("Reader error:", err);
    });

    reader.on('end', () => {
        console.log(`${reader.reader.name} reader is disconnected.`);
    });
});

nfc.on('error', err => {
    console.error("NFC error:", err);
});
