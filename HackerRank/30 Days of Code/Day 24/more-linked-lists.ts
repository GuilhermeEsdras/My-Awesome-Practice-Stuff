class No {
    prox: No;
    dado: number;
    constructor (dado: number) {
        this.dado = dado;
        this.prox = null;
    }
}

function inserir(cabeça: No, dado: number): No {
    let p: No = new No(dado);
    if (!cabeça) {
        cabeça = p;
    } else if (!cabeça.prox) {
        cabeça.prox = p;
    } else {
        let inicio: No = cabeça;
        while (inicio.prox) inicio = inicio.prox;
        inicio.prox = p;
    }
    return cabeça;
}

function printa(cabeça:No): void {
    let inicio: No = cabeça;
    let print: string = ''
    while (inicio) {
        print += inicio.dado + ' ';
        inicio = inicio.prox;
    }
    console.log(print);
}

function removeDuplicatas(cabeça:No): No {
    if (!cabeça || !cabeça.prox) {
        return cabeça;
    }

    if (cabeça.dado == cabeça.prox.dado) {
        cabeça.prox = cabeça.prox.prox;
        removeDuplicatas(cabeça);
    } else {
        removeDuplicatas(cabeça.prox);
    }
    return cabeça;
}


let T: number[] = [3, 5, 2, 7, 2, 1];
var cabeça: No = null;

for(let i = 0; i < T.length; i++) {
    cabeça = inserir(cabeça, T[i]);
}

cabeça = removeDuplicatas(cabeça);
printa(cabeça);