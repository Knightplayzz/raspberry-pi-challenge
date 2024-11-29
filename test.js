const NFC = require('nfc-pcsc');

const nfc = new NFC(); // Create an instance of the NFC reader

nfc.on('reader', reader => {
    console.log(`Reader detected: ${reader.name}`);

    reader.on('card', card => {
        console.log(`Card detected: `, card);

        // Example: read data from card
        reader.read(4, 16) // Read 16 bytes from block 4
            .then(data => {
                console.log('Data read:', data.toString('utf8'));
            })
            .catch(err => {
                console.error('Error reading data:', err);
            });
    });

    reader.on('error', err => {
        console.error(`Reader error: ${err}`);
    });

    reader.on('end', () => {
        console.log(`Reader ${reader.name} disconnected.`);
    });
});

nfc.on('error', err => {
    console.error(`NFC error: ${err}`);
});
