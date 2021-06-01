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
function main() {
    var _a;
    var n = 3;
    var a = [1, 2, 3];
    var numOfSwaps = 0;
    for (var i = 0; i < n; i++) {
        // Track number of elements swapped during a single array traversal
        var numberOfSwaps = 0;
        for (var j = 0; j < n - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                // swap(a[j], a[j + 1]);
                _a = [a[j + 1], a[j]], a[j] = _a[0], a[j + 1] = _a[1];
                numberOfSwaps++;
                numOfSwaps++;
            }
        }
        // If no elements were swapped during a traversal, array is sorted
        if (numberOfSwaps == 0) {
            break;
        }
    }
    console.log("Array is sorted in " + numOfSwaps + " swaps.\n" +
        "First Element: " + a[0] + "\n" +
        "Last Element: " + a[a.length - 1]);
}
main();
