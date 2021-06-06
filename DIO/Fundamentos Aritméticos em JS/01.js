let quantPos = 0;
for (let i = 0; i < 6; i++) {
  let num = parseInt(gets());
  if (num > 0) quantPos++;
}

console.log(`${quantPos} valores positivos`);