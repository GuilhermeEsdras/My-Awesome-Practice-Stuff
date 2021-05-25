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

class Difference {
    private _elements: number[];
    public maximumDifference: number;

    constructor(elements: Array<number>) {
        this._elements = elements;
    }

    computeDifference(): void {
        var maxDiffTemp: number;
        for (let i = 0; i < this._elements.length; i++) {
            for (let j = i+1; j < this._elements.length; j++) {
                let diff: number = Math.abs(this._elements[i] - this._elements[j]);
                if (maxDiffTemp === undefined || diff > maxDiffTemp) maxDiffTemp = diff;
            }
        }
        this.maximumDifference = maxDiffTemp;
    }
}

// function main() {
//     let n: number = parseInt(readLine());
//     let a: Array<number> = [];
//     let eles: string = readLine();
//     for (let i = 0; i < n; i++) {
//         a[i] = parseInt(eles.split(' ')[i]);
//     }
    
//     let difference: Difference = new Difference(a);
//     difference.computeDifference();

//     console.log(difference.maximumDifference);
// }

let a: Array<number> = [];
a[0] = 1;
a[1] = 2;
a[2] = 5;

let difference: Difference = new Difference(a);
difference.computeDifference();

console.log(difference.maximumDifference);