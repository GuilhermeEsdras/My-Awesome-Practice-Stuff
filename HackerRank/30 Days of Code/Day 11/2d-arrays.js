// 'use strict';
// process.stdin.resume();
// process.stdin.setEncoding('utf-8');
// let inputString: string = '';
// let inputLines: string[] = [];
// let currentLine: number = 0;
// process.stdin.on('data', function(inputStdin: string): void {
//     inputString += inputStdin;
// });
// process.stdin.on('end', function(): void {
//     inputLines = inputString.split('\n');
//     inputString = '';
//     main();
// });
// function readLine(): string {
//     return inputLines[currentLine++];
// }
// function main() {
//     let arr: number[][] = Array(6);
//     for (let i: number = 0; i < 6; i++) {
//         arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
//     }
//     var somaMax: number = Number.NEGATIVE_INFINITY;
//     var soma: number;
//     for (var y = 0; y <= (arr.length - 3); y++) {
//         for (let x = 0; x <= (arr[y].length - 3); x++) {
//             soma = 0;
//             soma += arr[y][x];
//             soma += arr[y][x+1];
//             soma += arr[y][x+2];
//             soma += arr[y+1][x+1];
//             soma += arr[y+2][x];
//             soma += arr[y+2][x+1];
//             soma += arr[y+2][x+2];
//             if (soma >= somaMax) somaMax = soma;
//             // console.log(`Soma: ${soma} | SomaMax: ${somaMax}`);
//         }
//     }
//     console.log(somaMax);
// }
/* .:: TESTS ::. */
var arr = Array(6);
// arr = [
//     [1, 1, 1, 0, 0, 0],
//     [0, 1, 0, 0, 0, 0],
//     [1, 1, 1, 0, 0, 0],
//     [0, 0, 2, 4, 4, 0],
//     [0, 0, 0, 2, 0, 0],
//     [0, 0, 1, 2, 4, 0]
// ]
arr = [
    [-1, -1, 0, -9, -2, -2],
    [-2, -1, -6, -8, -2, -5],
    [-1, -1, -1, -2, -3, -4],
    [-1, -9, -2, -4, -4, -5],
    [-7, -3, -3, -2, -9, -9],
    [-1, -3, -1, -2, -4, -5]
];
var somaMax;
var soma;
for (var y = 0; y <= (arr.length - 3); y++) {
    for (var x = 0; x <= (arr[y].length - 3); x++) {
        soma = 0;
        soma += arr[y][x];
        soma += arr[y][x + 1];
        soma += arr[y][x + 2];
        soma += arr[y + 1][x + 1];
        soma += arr[y + 2][x];
        soma += arr[y + 2][x + 1];
        soma += arr[y + 2][x + 2];
        if (soma >= somaMax || somaMax === undefined)
            somaMax = soma;
        console.log("Soma: " + soma + " | SomaMax: " + somaMax);
    }
}
console.log(somaMax);
