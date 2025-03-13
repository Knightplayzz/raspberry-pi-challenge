const { NFC } = require('nfc-pcsc');
const nfc = new NFC(); // Create an NFC instance

nfc.on('reader', reader => {
    console.log(`Reader detected: ${reader.reader.name}`);

    reader.on('card', card => {
        console.log(`Card detected! UID: ${card.uid}`);
        // You can also interact with the card's data here
    });

    reader.on('error', err => {
        console.error('Error:', err);
    });

    reader.on('end', () => {
        console.log('Reader disconnected');
    });
});

nfc.on('error', err => {
    console.error('Error:', err);
});
