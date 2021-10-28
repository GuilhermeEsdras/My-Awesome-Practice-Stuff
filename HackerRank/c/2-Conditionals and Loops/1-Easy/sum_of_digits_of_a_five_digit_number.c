#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>
#include <stdbool.h>

#define verborragic false
#define passoapasso false

/**
 * @see https://www.hackerrank.com/challenges/sum-of-digits-of-a-five-digit-number
 * @author Guilherme Esdras
 */
int main() {
    
    int n;
    if (verborragic) printf("Insira o numero: ");
    scanf("%d", &n);

    int sum = 0, ultimoDigito = 1, x = 1, newN = n/x;
    while (newN >= 1) {
      sum += (ultimoDigito = newN % 10);
      if (passoapasso) printf("x = %d | newN (n/x) = %d | ultimoDigito (n mod 10) = %d | sum = %d\n", x, newN, ultimoDigito, sum);
      x *= 10;
      newN = n/x;
    }

    if (verborragic) printf("A soma dos digitos do numero %d eh igual a %d!\n", n, sum);
    else printf("%d\n", sum);
    
    return 0;
}
