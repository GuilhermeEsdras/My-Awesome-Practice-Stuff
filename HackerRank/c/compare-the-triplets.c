#include <stdio.h>
#include <stdlib.h>

/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

/*
 * To return the integer array from the function, you should:
 *     - Store the size of the array to be returned in the result_count variable
 *     - Allocate the array statically or dynamically
 *
 * For example,
 * int* return_integer_array_using_static_allocation(int* result_count) {
 *     *result_count = 5;
 *
 *     static int a[5] = {1, 2, 3, 4, 5};
 *
 *     return a;
 * }
 *
 * int* return_integer_array_using_dynamic_allocation(int* result_count) {
 *     *result_count = 5;
 *
 *     int *a = malloc(5 * sizeof(int));
 *
 *     for (int i = 0; i < 5; i++) {
 *         *(a + i) = i + 1;
 *     }
 *
 *     return a;
 * }
 *
 */
int* compareTriplets(int a_count, int* a, int b_count, int* b, int* result_count) {
    *result_count = 2;

    int *res = malloc(*result_count * sizeof(int));
    res[0] = 0;
    res[1] = 0;

    int i;
    for(i = 0; i < a_count; i++)
        if (a[i] > b[i]) res[0]++;
        else if (a[i] < b[i]) res[1]++;
    
    return res;
}

int main() {
    int *a = malloc(3 * sizeof(int));
    a[0] = 17; a[1] = 28; a[2] = 30;
    
    int *b = malloc(3 * sizeof(int));
    b[0] = 99; b[1] = 16; b[2] = 8;

    int res_count, *arr = compareTriplets(3, a, 3, b, &res_count);

    printf("%d %d\n", arr[0], arr[1]);
    return 0;
}