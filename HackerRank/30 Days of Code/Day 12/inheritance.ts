// 'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');
// let inputString: string = '';
let simulaInputString: string = '';
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

class Person {
    protected _firstName: string;
    protected _lastName: string;
    protected _idNumber: number;

    constructor(firstName: string, lastName: string, identification: number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._idNumber = identification;
    }

    printPerson(): void {
        console.log(
            `Name: ${this._lastName}, ${this._firstName}\nID: ${this._idNumber}`
        );
    }
}

class Student extends Person {
    protected _testScores: number[];

    constructor(firstName: string, lastName: string, identification: number, testScores: number[]) {
        super(firstName, lastName, identification);
        this._testScores = testScores;
    }

    calculate(): string {
        let char: string;
        let sum: number = 0,
            avr: number;
        for (let i = 0; i < this._testScores.length; i++) {
            sum += this._testScores[i];
        }
        avr = sum / this._testScores.length;
        
        if (avr >= 90 && avr <= 100) char = 'O';
        else if (avr >= 80 && avr < 90) char = 'E';
        else if (avr >= 70 && avr < 80) char = 'A';
        else if (avr >= 55 && avr < 70) char = 'P';
        else if (avr >= 40 && avr < 55) char = 'D';
        else char = 'T';

        return char;
    }
}

// function main() {
//     inputString = readLine();
//     let firstName: string = inputString.split(' ')[0],
//         lastName: string = inputString.split(' ')[1],
//         id: number = parseInt(inputString.split(' ')[2]);
        
//     inputString = readLine();
//     let numScores: number = parseInt(inputString);
    
//     let testScores: Array<number> = [];
//     inputString = readLine();
//     for(let i = 0; i < numScores; i++) {
//         testScores[i] = parseInt(inputString.split(' ')[i]);
//     }

//     let s: Student = new Student(firstName, lastName, id, testScores);

//     s.printPerson();
//     console.log(`Grade: ${s.calculate()}`);
// }

/* .:: MEUS TESTES ::. */

simulaInputString = 'Guilherme Esdras 7826099';
let firstName: string = simulaInputString.split(' ')[0],
    lastName: string = simulaInputString.split(' ')[1],
    id: number = parseInt(simulaInputString.split(' ')[2]);
// console.log(firstName);
// console.log(lastName);
// console.log(id);

simulaInputString = '4';
let numScores: number = parseInt(simulaInputString);
// console.log(numScores);

simulaInputString = '40 60 54 70';
let testScores: Array<number> = [];
for(let i = 0; i < numScores; i++) {
    testScores[i] = parseInt(simulaInputString.split(' ')[i]);
    // console.log(testScores[i]);
}

let s: Student = new Student(firstName, lastName, id, testScores);

s.printPerson();
console.log(`Grade: ${s.calculate()}`);