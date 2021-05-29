// 'use strict';
var Pilha = /** @class */ (function () {
    function Pilha(capacidade) {
        if (capacidade === void 0) { capacidade = Infinity; }
        this.capacidade = capacidade;
        this.armazem = [];
        // Sempre inicia com uma capacidade infinita por padrão
        // porém,
        // pode-se iniciar com uma determinada capacidade
    }
    Pilha.prototype.empilha = function (item) {
        if (!(this.tamanho() === this.capacidade)) {
            this.armazem.push(item);
        }
    };
    Pilha.prototype.desempilha = function () {
        return this.armazem.pop();
    };
    Pilha.prototype.topo = function () {
        return this.armazem[this.tamanho() - 1];
    };
    Pilha.prototype.tamanho = function () {
        return this.armazem.length;
    };
    return Pilha;
}());
var Fila = /** @class */ (function () {
    function Fila(capacidade) {
        if (capacidade === void 0) { capacidade = Infinity; }
        this.capacidade = capacidade;
        this.armazem = [];
    }
    Fila.prototype.enfileira = function (item) {
        if (!(this.tamanho() === this.capacidade)) {
            this.armazem.push(item);
        }
    };
    Fila.prototype.desenfileira = function () {
        return this.armazem.shift();
    };
    Fila.prototype.tamanho = function () {
        return this.armazem.length;
    };
    return Fila;
}());
var Solution = /** @class */ (function () {
    function Solution(capacidade) {
        if (capacidade === void 0) { capacidade = Infinity; }
        this.capacidade = capacidade;
        this.pilha = new Pilha(capacidade);
        this.fila = new Fila(capacidade);
    }
    Solution.prototype.pushCharacter = function (s) {
        return this.pilha.empilha(s);
    };
    Solution.prototype.enqueueCharacter = function (s) {
        return this.fila.enfileira(s);
    };
    Solution.prototype.popCharacter = function () {
        return this.pilha.desempilha();
    };
    Solution.prototype.dequeueCharacter = function () {
        return this.fila.desenfileira();
    };
    return Solution;
}());
function main() {
    // Enter your code here
    var s = 'natan';
    var len = s.length;
    var obj = new Solution();
    for (var i = 0; i < len; i++) {
        obj.pushCharacter(s.charAt(i));
        obj.enqueueCharacter(s.charAt(i));
    }
    var ehPalindromo = true;
    for (var i = 0; i < len / 2; i++) {
        if (obj.popCharacter() != obj.dequeueCharacter()) {
            ehPalindromo = false;
            break;
        }
    }
    if (ehPalindromo)
        console.log("The word, " + s + ", is a palindrome.");
    else
        console.log("The word, " + s + ", is not a palindrome.");
}
main();
