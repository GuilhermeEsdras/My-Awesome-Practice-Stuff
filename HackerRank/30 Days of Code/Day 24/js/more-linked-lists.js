var No = /** @class */ (function () {
    function No(dado) {
        this.dado = dado;
        this.prox = null;
    }
    return No;
}());
function inserir(cabeça, dado) {
    var p = new No(dado);
    if (!cabeça) {
        cabeça = p;
    }
    else if (!cabeça.prox) {
        cabeça.prox = p;
    }
    else {
        var inicio = cabeça;
        while (inicio.prox)
            inicio = inicio.prox;
        inicio.prox = p;
    }
    return cabeça;
}
function printa(cabeça) {
    var inicio = cabeça;
    var print = '';
    while (inicio) {
        print += inicio.dado + ' ';
        inicio = inicio.prox;
    }
    console.log(print);
}
function removeDuplicatas(cabeça) {
    if (!cabeça || !cabeça.prox) {
        return cabeça;
    }
    if (cabeça.dado == cabeça.prox.dado) {
        cabeça.prox = cabeça.prox.prox;
        removeDuplicatas(cabeça);
    }
    else {
        removeDuplicatas(cabeça.prox);
    }
    return cabeça;
}
var T = [3, 5, 2, 7, 2, 1];
var cabeça = null;
for (var i = 0; i < T.length; i++) {
    cabeça = inserir(cabeça, T[i]);
}
cabeça = removeDuplicatas(cabeça);
printa(cabeça);
