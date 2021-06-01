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

interface Array<T> {
    bubbleSort(): number;
}

Array.prototype.bubbleSort = function () {
    let numOfSwaps: number = 0;
    for (let i = 0; i < this.length; i++) {
        // Track number of elements swapped during a single array traversal
        let numberOfSwaps: number = 0;
        
        for (let j = 0; j < this.length - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (this[j] > this[j + 1]) {
                // swap(a[j], a[j + 1]);
                [this[j], this[j + 1]] = [this[j + 1], this[j]];
    
                numberOfSwaps++;
                numOfSwaps++;
            }
        }
        
        // If no elements were swapped during a traversal, array is sorted
        if (numberOfSwaps == 0) {
            break;
        }
    }
    return numOfSwaps;
}

function main() {
    const n: number = /* parseInt(readLine().trim(), 10) */ 4;

    const a: number[] = /* readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10)) */ [4, 3, 1, 2];

    console.log(
        "Array is sorted in " + a.bubbleSort() + " swaps.\n" + 
        "First Element: " + a[0] + "\n" +
        "Last Element: " + a[a.length-1]
    );
}

main();