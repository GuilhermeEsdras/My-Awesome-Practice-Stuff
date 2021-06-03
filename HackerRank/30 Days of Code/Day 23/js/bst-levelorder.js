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
var No = /** @class */ (function () {
    function No(dado) {
        this.dado = dado;
        this.esq = this.dir = null;
    }
    return No;
}());
function inserir(raiz, dado) {
    if (!raiz)
        return new No(dado);
    else {
        var atual = void 0;
        if (dado <= raiz.dado) {
            atual = inserir(raiz.esq, dado);
            raiz.esq = atual;
        }
        else {
            atual = inserir(raiz.dir, dado);
            raiz.dir = atual;
        }
        return raiz;
    }
}
function getAltura(raiz) {
    if (!raiz)
        return -1;
    var esq = getAltura(raiz.esq);
    var dir = getAltura(raiz.dir);
    return (dir > esq ? dir : esq) + 1;
}
function levelOrder(raiz) {
    if (raiz) {
        var print = '';
        var fila = new Fila();
        fila.enfileira(raiz);
        while (fila.tamanho() > 0) {
            var arv = fila.desenfileira();
            if (arv) {
                print += arv.dado + ' ';
                if (arv.esq) {
                    fila.enfileira(arv.esq);
                }
                if (arv.dir) {
                    fila.enfileira(arv.dir);
                }
            }
        }
        console.log(print);
    }
}
var T = [3, 5, 4, 7, 2, 1];
var raiz = null;
for (var i = 0; i < T.length; i++) {
    raiz = inserir(raiz, T[i]);
}
// console.log(`Altura: ${getAltura(raiz)}`);
levelOrder(raiz);
