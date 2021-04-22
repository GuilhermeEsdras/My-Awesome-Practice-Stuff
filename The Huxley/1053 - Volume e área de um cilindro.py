# H = Altura
# R = Raio
H = float(input())
R = float(input())

Pi = 3.14

# V = Volume
# A = Área da Superfície
V = H*Pi*(R**2)
A = 2*Pi*R**2 + 2*Pi*R*H

print("{:.2f}".format(V))
print("{:.2f}".format(A))