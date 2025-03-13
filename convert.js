function stringToFixedHexBytes(input, length = 16) {
    let hexArray = [];
    for (let i = 0; i < length; i++) {
        if (i < input.length) {
            hexArray.push(input.charCodeAt(i).toString(16).padStart(2, '0').toUpperCase());
        } else hexArray.push('00');
    }
    return hexArray.join(' ');
}

let fixedHexOutput = stringToFixedHexBytes("Hello", 16);
console.log(fixedHexOutput);

function hexBytesToString(hexString) {
    return hexString.split(' ')
        .filter(byte => byte !== '00')
        .map(byte => String.fromCharCode(parseInt(byte, 16)))
        .join('');
}
let outputString = hexBytesToString(fixedHexOutput);
console.log(outputString);
