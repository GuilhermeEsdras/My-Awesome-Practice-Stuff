#include <stdio.h>

int main() {
    float pH;
    scanf("%f", &pH);
    if (pH < 7) {
        printf("Acida");
    } else if (pH > 7) {
        printf("Basica");
    } else {
        printf("Neutra");
    }
    return 0;
}