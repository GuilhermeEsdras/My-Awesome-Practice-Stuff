// 'use strict';
Array.prototype.bubbleSort = function () {
    var _a;
    var numOfSwaps = 0;
    for (var i = 0; i < this.length; i++) {
        // Track number of elements swapped during a single array traversal
        var numberOfSwaps = 0;
        for (var j = 0; j < this.length - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (this[j] > this[j + 1]) {
                // swap(a[j], a[j + 1]);
                _a = [this[j + 1], this[j]], this[j] = _a[0], this[j + 1] = _a[1];
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
};
function main() {
    var n = 4;
    var a = [4, 3, 1, 2];
    console.log("Array is sorted in " + a.bubbleSort() + " swaps.\n" +
        "First Element: " + a[0] + "\n" +
        "Last Element: " + a[a.length - 1]);
}
main();
