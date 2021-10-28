#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

/**
 * @see https://www.hackerrank.com/challenges/sum-numbers-c
 * @author Guilherme Esdras
 */
int main()
{
    int x, y;
    float w, z;
    
    scanf("%d %d", &x, &y);
    scanf("%f %f", &w, &z);
    
    printf("%d %d\n", x+y, x-y);
    printf("%.1f %.1f", w+z, w-z);
    
    return 0;
}
