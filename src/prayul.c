#include <stdio.h>
int v, i = 0, a = 0, b = 0, c = 0, d = 0, e = 0, sp = 0;
void main()
{
    for (i = 0; i < 5; i++)
    {
        scanf("%d", &v);
        if (v == 1)
        {
            a++;
        }
        else if (v == 2)
        {
            b++;
        }
        else if (v == 3)
        {
            c++;
        }
        else if (v == 4)
        {
            d++;
        }
        else if (v == 5)
        {
            e++;
        }
        else
        {
            sp++;
        }
    }
    printf("%d\n",a);
    printf("%d\n",b);
    printf("%d\n",c);
    printf("%d\n",d);
    printf("%d\n",e);
    printf("%d\n",5-sp);
    
    printf("%d",sp);
}