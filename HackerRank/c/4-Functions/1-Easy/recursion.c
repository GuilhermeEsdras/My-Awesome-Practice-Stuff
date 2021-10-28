#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>
//Complete the following function.

int find_nth_term(int n, int a, int b, int c) {
    int x = a + b + c;
    return n > 4 ? x = find_nth_term(--n, b, c, x) : x;
}

/**
 * @see https://www.hackerrank.com/challenges/recursion-in-c
 * @author Guilherme Esdras
 */
int main() {
    int n, a, b, c;
  
    scanf("%d %d %d %d", &n, &a, &b, &c);
    int ans = find_nth_term(n, a, b, c);
 
    printf("%d", ans); 
    return 0;
}
