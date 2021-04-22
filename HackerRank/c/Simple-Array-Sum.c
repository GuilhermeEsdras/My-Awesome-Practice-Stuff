#include <stdio.h>

/*
 * Complete the simpleArraySum function below.
 */
int simpleArraySum(int ar_count, int* ar) {
    /*
     * Write your code here.
     */
    
    int sum = 0;
    for(int i = 0; i < ar_count; i++) {
        sum += ar[i];
    }
    return sum;
}

int main() {
    int ar[6];
    for (int i = 0; i < 6; i++) ar[i] = i;
    for (int i = 0; i < 6; i++) printf("%d ", ar[i]);
    return 0;
}