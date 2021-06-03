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

function getAltura(raiz:No): number {
    if (!raiz) return -1;
    let esq = getAltura(raiz.esq);
    let dir = getAltura(raiz.dir)
    return (dir > esq ? dir : esq) + 1;
}

function levelOrder(raiz:No): void {

    if (raiz) {
        let print: string = '';
        let fila: Fila<No> = new Fila();
        fila.enfileira(raiz);

        while (fila.tamanho() > 0) {
            let arv: No = fila.desenfileira();
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


let T: number[] = [3, 5, 4, 7, 2, 1];
var raiz: No = null;

for(let i = 0; i < T.length; i++) {
    raiz = inserir(raiz, T[i]);
}

// console.log(`Altura: ${getAltura(raiz)}`);
levelOrder(raiz);
