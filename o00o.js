const charSet = 'o0';

function makeString(length) {
    let result = '';
    const charSetLength = charSet.length;
    for (let i = 0; i < length; i++) {
        result += charSet.charAt(Math.floor(Math.random() * charSetLength));
    }
    return result;
}

var oO = makeString(1000);

document.getElementById("rand").innerHTML = oO;