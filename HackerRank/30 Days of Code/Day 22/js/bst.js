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
function printMenores(raiz) {
    var temp = raiz;
    var menores = 'Menores (esq): ';
    var quantMenores = 0;
    while (temp) {
        menores += temp.dado + " ";
        quantMenores++;
        temp = temp.esq;
    }
    // console.log(menores);
    return quantMenores;
}
function printMaiores(raiz) {
    var temp = raiz;
    var maiores = 'Maiores (dir): ';
    var quantMaiores = 0;
    while (temp) {
        maiores += temp.dado + " ";
        quantMaiores++;
        temp = temp.dir;
    }
    // console.log(maiores);
    return quantMaiores;
}
function getAltura(raiz) {
    var dir = 0;
    var esq = 0;
    var temp = raiz;
    while (temp) {
        dir++;
        temp = temp.dir;
    }
    temp = raiz;
    while (temp) {
        esq++;
        temp = temp.esq;
    }
    return (dir > esq ? dir : esq) - 1;
}
var T = [3, 5, 2, 1, 4, 6, 7];
var raiz = null;
for (var i = 0; i < T.length; i++) {
    raiz = inserir(raiz, T[i]);
}
// printMaiores(raiz);
// printMenores(raiz);
console.log("Altura: " + getAltura(raiz));
