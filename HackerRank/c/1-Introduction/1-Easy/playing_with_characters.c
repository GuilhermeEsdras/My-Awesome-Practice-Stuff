#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

#define MAX_LEN 100

/**
 * @see https://www.hackerrank.com/challenges/playing-with-characters
 * @author Guilherme Esdras
 */
int main() 
{
    char ch, s[MAX_LEN], sen[MAX_LEN];
    scanf("%c", &ch);
    scanf("%s", s);
    scanf(" %[^\n]%*c", &sen);
    
    printf("%c\n", ch);
    printf("%s\n", s);
    printf("%s", sen);
    return 0;
}
