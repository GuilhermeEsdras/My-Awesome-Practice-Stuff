#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {

    int T;
    scanf("%d", &T);

    while (T--) {

      char *S, *evens, *odds;
      S = malloc(5000 * sizeof(char));
      evens = malloc(1000 * sizeof(char));
      odds = malloc(1000 * sizeof(char));

      scanf(" %[^\n]s", S);

      int ec = 0, oc = 0;

      for (int i = 0; S[i] != '\0'; i++) {
        printf("%c\n", S[i]);
          if (i % 2 == 0) evens[ec++] = S[i];
          else odds[oc++] = S[i];
      }

      for (int e = 0; evens[e] != '\0'; e++) {
        printf("%c", evens[e]);
      }
      
      printf(" ");

      for (int o = 0; odds[o] != '\0'; o++) {
        printf("%c", odds[o]);
      }
      printf("\n");

      free(S);
      free(evens);
      free(odds);

    }

    return 0;
}
