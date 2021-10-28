#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

/**
 * @see https://www.hackerrank.com/challenges/1d-arrays-in-c
 * @author Guilherme Esdras
 */
int main() {

    /* Enter your code here. Read input from STDIN. Print output to STDOUT */    
    int n, sum = 0, *arr;
    scanf("%d", &n);
    arr = malloc(n * sizeof(int));
    for(int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
        sum += arr[i];
    }
    printf("%d", sum);
    return 0;
}
