let alcohol = 0;
let gasoline = 0;
let diesel = 0;

var sair = false;
while (!sair) {
  const code = parseInt(gets());
  
  switch (code) {
    case 1:
      alcohol++;
      break;
    case 2:
      gasoline++;
      break;
    case 3:
      diesel++;
      break;
    case 4:
      sair = true;
      break;
  }
}

console.log("MUITO OBRIGADO");
console.log("Alcool: " + alcohol);
console.log("Gasolina: " + gasoline);
console.log("Diesel: " + diesel);