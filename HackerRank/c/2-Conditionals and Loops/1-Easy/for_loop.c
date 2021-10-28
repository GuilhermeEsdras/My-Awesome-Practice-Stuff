#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>


/**
 * @see https://www.hackerrank.com/challenges/for-loop-in-c
 * @author Guilherme Esdras
 */
int main() 
{
    int a, b;
    scanf("%d\n%d", &a, &b);
    
    for(int i = a; i <= b; i++) {
        if (i >= 1 && i <= 9) {
            char* letter = 
                  i == 1 ? "one"
                : i == 2 ? "two"
                : i == 3 ? "three"
                : i == 4 ? "four"
                : i == 5 ? "five"
                : i == 6 ? "six"
                : i == 7 ? "seven"
                : i == 8 ? "eight"
                : i == 9 ? "nine" 
                : "";
            printf("%s\n", letter);
        }
        else if (i % 2 == 0)
            printf("even\n");
        else
            printf("odd\n");
    }

    return 0;
}

