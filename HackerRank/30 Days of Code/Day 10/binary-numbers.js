// 'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

const n = '13';
let bin = (n >>> 0).toString(2), cont1 = 0, maxCont = 0;

[...bin].forEach(
    digit => {
        if (digit == '1') {
            cont1++;
            if (cont1 >= maxCont) maxCont = cont1;
        } else {
            cont1 = 0;
        }
    }
)

console.log(maxCont);