// 'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// process.stdin.resume();
// process.stdin.setEncoding('utf-8');
// let inputString: string = '';
var simulaInputString = '';
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
var Person = /** @class */ (function () {
    function Person(firstName, lastName, identification) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._idNumber = identification;
    }
    Person.prototype.printPerson = function () {
        console.log("Name: " + this._lastName + ", " + this._firstName + "\nID: " + this._idNumber);
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(firstName, lastName, identification, testScores) {
        var _this = _super.call(this, firstName, lastName, identification) || this;
        _this._testScores = testScores;
        return _this;
    }
    Student.prototype.calculate = function () {
        var char;
        var sum = 0, avr;
        for (var i = 0; i < this._testScores.length; i++) {
            sum += this._testScores[i];
        }
        avr = sum / this._testScores.length;
        if (avr >= 90 && avr <= 100)
            char = 'O';
        else if (avr >= 80 && avr < 90)
            char = 'E';
        else if (avr >= 70 && avr < 80)
            char = 'A';
        else if (avr >= 55 && avr < 70)
            char = 'P';
        else if (avr >= 40 && avr < 55)
            char = 'D';
        else
            char = 'T';
        return char;
    };
    return Student;
}(Person));
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
var firstName = simulaInputString.split(' ')[0], lastName = simulaInputString.split(' ')[1], id = parseInt(simulaInputString.split(' ')[2]);
// console.log(firstName);
// console.log(lastName);
// console.log(id);
simulaInputString = '4';
var numScores = parseInt(simulaInputString);
// console.log(numScores);
simulaInputString = '40 60 54 70';
var testScores = [];
for (var i = 0; i < numScores; i++) {
    testScores[i] = parseInt(simulaInputString.split(' ')[i]);
    // console.log(testScores[i]);
}
var s = new Student(firstName, lastName, id, testScores);
s.printPerson();
console.log("Grade: " + s.calculate());
