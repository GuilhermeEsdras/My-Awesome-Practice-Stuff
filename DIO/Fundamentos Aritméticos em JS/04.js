nt = [100,50,20,10,5,2,1]
v= gets()
console.log(v)
for (n of nt) {
  console.log( parseInt(v/n) + " nota(s) de R$ " +n+ ",00")
  v-= parseInt(v/n)*n
}