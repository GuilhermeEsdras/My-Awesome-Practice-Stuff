#include <stdio.h>

void update(int *a,int *b) {
    int sum = *a + *b;
    int absDiff = (*a > *b) ? (*a - *b) : (*b - *a);
    *a = sum;
    *b = absDiff;
}

/**
 * @see https://www.hackerrank.com/challenges/pointer-in-c
 * @author Guilherme Esdras
 */
int main() {
    int a, b;
    int *pa = &a, *pb = &b;
    
    scanf("%d %d", &a, &b);
    update(pa, pb);
    printf("%d\n%d", a, b);

    return 0;
}
