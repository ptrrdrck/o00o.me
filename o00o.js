const charSet = 'o0';

function makeString(length) {
    let result = '';
    const charSetLength = charSet.length;
    for (let i = 0; i < length; i++) {
        result += charSet.charAt(Math.floor(Math.random() * charSetLength));
    }
    return result;
}

var o0 = makeString(1000);

document.getElementById("rand").innerHTML = o0;


function findMaxRepeat(string) {
    let obj = {};
    let maxLength = 0;
    let start = 0;
    const stringArray = string.split('');
    for (let i = 0; i < string.length; i++) {
        if (obj[stringArray[i]] !== undefined && obj[stringArray[i]] >= start && obj[stringArray[i]] == obj[stringArray[(i + 1)]]) {
            start = obj[stringArray[i]] + 1;
        }
        obj[stringArray[i]] = i;
        maxLength = Math.max(maxLength, (i - start + 1))
    }
    return maxLength;
}

var maxRepeat = findMaxRepeat(o0);

document.getElementById("max").innerHTML = `Your longest repetition is ${maxRepeat} characters.`;