#RPC = Raio do Primeiro C�rculo
#RSC = Raio do Segundo C�rculo
RPC = float(input())
RSC = float(input())

if RPC > RSC:
    print("Primeiro circulo")
else:
    if RPC < RSC:
        print("Segundo circulo")
    else:
        print("Iguais")