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

interface AdvancedArithmetic {
    divisorSum(n: number): number;
}

class Calculator implements AdvancedArithmetic {
    public divisorSum(n: number): number {
        let sum: number = 0;
        for (let i = 1; i <= n; i++) {
            if (n % i == 0) sum += i;
        }
        return sum;
    }
}

function main() {
    // Enter your code here
    let n: number = parseInt(/* readLine() */ '2');

    let myCalculator: AdvancedArithmetic = new Calculator();
    let sum: number = myCalculator.divisorSum(n);
    console.log(`I implemented: AdvancedArithmetic`);
    console.log(sum);
}

main();