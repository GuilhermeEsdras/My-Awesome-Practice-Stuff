for i in range(int(input())): 
    S = input()
    print(*["".join(S[::2]), "".join(S[1::2])])