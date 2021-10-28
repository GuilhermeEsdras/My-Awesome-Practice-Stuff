#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

/**
 * @see https://www.hackerrank.com/challenges/printing-tokens-
 * @author Guilherme Esdras
 */
int main() {

    char *s;
    s = malloc(1024 * sizeof(char));
    scanf("%[^\n]", s);
    s = realloc(s, strlen(s) + 1);
    //Write your logic to print the tokens of the sentence here.
    for (int i = 0; s[i] != '\0'; i++)
        if (s[i] != ' ') printf("%c", s[i]);
        else printf("\n");

    return 0;
}
