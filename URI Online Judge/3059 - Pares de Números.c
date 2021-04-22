#include <stdio.h>
#include <stdlib.h>

int main(void) {
  int N, I, F, 
  *vetor, 
  i, atual, prox, 
  soma = 0, cont = 0;
  scanf("%d %d %d", &N, &I, &F);

  vetor = (int*) malloc(N*sizeof(int));
  for (i = 0; i < N; i++) scanf("%d", &vetor[i]);

  for (atual = 0; atual < N; atual++) {
    for (prox = atual+1; prox < N; prox++) {
      if (!(vetor[atual] == vetor[prox])) {
        soma = vetor[atual] + vetor[prox];
        if (soma >= I && soma <= F) cont++;
      }
    }
  }

  printf("%d\n", cont);
  return 0;
}