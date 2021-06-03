class No {
    esq: No;
    dir: No;
    dado: number;
    constructor (dado: number) {
        this.dado = dado;
        this.esq = this.dir = null;
    }
}

function inserir(raiz: No, dado: number): No {
    if (!raiz) return new No(dado);
    else {
        let atual: No;
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

function printMenores(raiz:No): number {
    let temp: No = raiz;
    let menores: string = 'Menores (esq): ';
    let quantMenores: number = 0;
    while (temp) {
        menores += `${temp.dado} `;
        quantMenores++;
        temp = temp.esq;
    }
    // console.log(menores);
    return quantMenores;
}

function printMaiores(raiz:No): number {
    let temp: No = raiz;
    let maiores: string = 'Maiores (dir): ';
    let quantMaiores: number = 0;
    while (temp) {
        maiores += `${temp.dado} `;
        quantMaiores++;
        temp = temp.dir;
    }
    // console.log(maiores);
    return quantMaiores;
}

function getAltura(raiz:No): number {
    let dir: number = 0;
    let esq: number = 0;
    let temp: No = raiz;
    while (temp) {
        dir++;
        temp = temp.dir;
    }
    temp = raiz;
    while (temp) {
        esq++;
        temp = temp.esq;
    }

    return (dir > esq ? dir : esq) -1;
}


let T: number[] = [3, 5, 2, 1, 4, 6, 7];
var raiz: No = null;

for(let i = 0; i < T.length; i++) {
    raiz = inserir(raiz, T[i]);
}

// printMaiores(raiz);
// printMenores(raiz);
console.log(`Altura: ${getAltura(raiz)}`);