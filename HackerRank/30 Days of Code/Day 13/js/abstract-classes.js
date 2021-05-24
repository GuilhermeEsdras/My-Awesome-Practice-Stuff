// 'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Book = /** @class */ (function () {
    function Book(title, author) {
        this._title = title;
        this._author = author;
    }
    return Book;
}());
var MyBook = /** @class */ (function (_super) {
    __extends(MyBook, _super);
    function MyBook(title, author, price) {
        var _this = _super.call(this, title, author) || this;
        _this._price = price;
        return _this;
    }
    MyBook.prototype.display = function () {
        console.log("Title: " + this._title + "\nAuthor: " + this._author + "\nPrice: " + this._price);
    };
    return MyBook;
}(Book));
// function main() {
// let title: string = readLine();
// let author: string = readLine();
// let price: number = parseInt(readLine());
// let book: Book = new MyBook(title, author, price);
// book.display();
// }
var title = 'The Alchemist';
var author = 'Paulo Coelho';
var price = 248;
var book = new MyBook(title, author, price);
book.display();
