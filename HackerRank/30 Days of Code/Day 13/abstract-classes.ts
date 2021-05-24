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

abstract class Book {
    protected _title: string;
    protected _author: string;

    constructor(title: string, author: string) {
        this._title = title;
        this._author = author;
    }

    abstract display() : void;
}

class MyBook extends Book {
    protected _price: number;
    
    constructor(title: string, author: string, price: number) {
        super(title, author);
        this._price = price;
    }

    display() : void {
        console.log(`Title: ${this._title}\nAuthor: ${this._author}\nPrice: ${this._price}`);
    }
}


// function main() {
    // let title: string = readLine();
    // let author: string = readLine();
    // let price: number = parseInt(readLine());
    
    // let book: Book = new MyBook(title, author, price);
    // book.display();
// }


let title: string = /* readLine() */ 'The Alchemist';
let author: string = /* readLine() */ 'Paulo Coelho';
let price: number = /* parseInt(readLine()) */ 248;

let book: Book = new MyBook(title, author, price);
book.display();
