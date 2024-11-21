const NFC = require('nfc-pcsc').NFC;
const nfc = new NFC(); // Maak een nieuwe NFC instantie

nfc.on('reader', reader => {
    console.log(`${reader.reader.name} reader is connected.`);

    reader.on('card', async card => {
        console.log(`Card detected:`, card);

        try {
            // Blok kiezen om vanaf te lezen (pas dit aan voor jouw kaart)
            const block = 4;
            const length = 16; // Lees 16 bytes (aanpassen indien nodig)

            const data = await reader.read(block, length, 16); // Lees vanaf blok 4
            console.log("Data gelezen van NFC-kaart:", data.toString()); // Print data als string

        } catch (err) {
            console.error("Fout bij lezen van kaart:", err);
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