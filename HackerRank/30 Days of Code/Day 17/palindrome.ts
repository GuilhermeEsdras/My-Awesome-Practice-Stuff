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

interface InPilha<T> {
    empilha(elemento: T): void;
    desempilha(): T | undefined;
    topo(): T | undefined;
    tamanho(): number;
}

class Pilha<T> implements InPilha<T> {
    private armazem: T[] = [];

    constructor(private capacidade: number = Infinity) {
        // Sempre inicia com uma capacidade infinita por padrão
        // porém,
        // pode-se iniciar com uma determinada capacidade
    }

    empilha(item: T): void {
        if (!(this.tamanho() === this.capacidade)) {
            this.armazem.push(item);
        }
    }

    desempilha(): T | undefined {
        return this.armazem.pop();
    }

    topo(): T | undefined {
        return this.armazem[this.tamanho() - 1]
    }

    tamanho(): number {
        return this.armazem.length;
    }
}

interface InFila<T> {
    enfileira(item: T): void;
    desenfileira(): T;
    tamanho(): number;
}

class Fila<T> implements InFila<T> {
    private armazem: T[] = [];

    constructor(private capacidade: number = Infinity) { }

    enfileira(item: T): void {
        if (!(this.tamanho() === this.capacidade)) {
            this.armazem.push(item);
        }
    }

    desenfileira(): T | undefined {
        return this.armazem.shift();
    }

    tamanho(): number {
        return this.armazem.length;
    }
}

class Solution {
    private pilha: Pilha<string>;
    private fila: Fila<string>;

    constructor(private capacidade: number = Infinity) {
        this.pilha = new Pilha(capacidade);
        this.fila = new Fila(capacidade);
    }

    pushCharacter(s: string): void {
        return this.pilha.empilha(s);
    }

    enqueueCharacter(s: string): void {
        return this.fila.enfileira(s);
    }

    popCharacter(): string | undefined {
        return this.pilha.desempilha();
    }

    dequeueCharacter(): string | undefined {
        return this.fila.desenfileira();
    }
}

function main() {
    // Enter your code here
    let s: string = /* readLine() */ 'natan';

    let len: number = s.length;
    let obj: Solution = new Solution();

    for (let i = 0; i < len; i++) {
        obj.pushCharacter(s.charAt(i));
        obj.enqueueCharacter(s.charAt(i));
    }

    let ehPalindromo: boolean = true;

    for (let i = 0; i < len / 2; i++) {
        if (obj.popCharacter() != obj.dequeueCharacter()) {
            ehPalindromo = false;
            break;
        }
    }

    if (ehPalindromo) console.log("The word, "+s+", is a palindrome.");
    else console.log("The word, "+s+", is not a palindrome.");
}

main();