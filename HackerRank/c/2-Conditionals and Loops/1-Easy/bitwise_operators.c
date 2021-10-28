#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>
//Complete the following function.

void calculate_the_maximum(int n, int k) {
    int maxAND = 0, maxOR = 0, maxXOR = 0;
    for (int i = 1; i < n; i++) {
        int a = i;
        for (int j = a+1; j <= n; j++) {
            int b = j;
            int AND = (a & b);
            int OR = (a | b);
            int XOR = (a ^ b);
            if ( (AND > maxAND) && (AND < k) )
                maxAND = AND;
            if ( (OR > maxOR) && (OR < k) )
                maxOR = OR;
            if ( (XOR > maxXOR) && (XOR < k) )
                maxXOR = XOR;
        }
    }
    
    printf("%d\n", maxAND);
    printf("%d\n", maxOR);
    printf("%d\n", maxXOR);
}

/**
 * @see https://www.hackerrank.com/challenges/bitwise-operators-in-c
 * @author Guilherme Esdras
 */
int main() {
    int n, k;
  
    scanf("%d %d", &n, &k);
    calculate_the_maximum(n, k);
 
    return 0;
}
