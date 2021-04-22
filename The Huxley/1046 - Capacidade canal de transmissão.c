#include <stdio.h>

int main() {
	double TVideo, TAudio, TDados, Capacidade, QDmax;
	
	scanf("%lf\n%lf\n%lf\n%lf", &TVideo, &TAudio, &TDados, &Capacidade);
	
	QDmax = (TVideo*5.2 + TAudio*3.4 + TDados*1.5) / Capacidade;
	
	printf("%.2lf", QDmax);

	return 0;
}