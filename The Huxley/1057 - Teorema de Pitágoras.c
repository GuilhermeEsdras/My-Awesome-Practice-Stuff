#include <stdio.h>
#include <math.h>

int main()
{
    double Hip, CatA, CatB; scanf("%lf\n%lf", &CatA, &CatB);
    Hip = sqrt( ((CatA*CatA) + (CatB*CatB)) );
    printf("%.2lf", Hip);
    return 0;
}