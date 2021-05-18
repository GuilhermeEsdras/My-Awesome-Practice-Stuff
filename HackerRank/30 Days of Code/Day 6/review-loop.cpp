#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

int main() {
  int T;
  std::cin >> T;
  while (T--) {
    std::string S, evens, odds;
    std::cin >> S;
    for (int i = 0; i < S.size(); i++) {
      if (i % 2 == 0) evens += S[i];
      else odds += S[i];
    }
    std::cout << evens << " " << odds << std::endl;
  }
}