var n = 6;
var person = [
    "fulano fulano@gmail.com",
    "cicrano cicrano@outlook.com",
    "kasldkasld kasldkasld@gmail.com",
    "lasdllwe lasdllwe@tal.com",
    "ksdksdkd ksdksdkd@flsdls.com",
    "bkasdkskdwe bkasdkskdwe@gmail.com",
    "zkasdkskdksd zkasdkskdksd@gmail.com",
    "1alsdld 1alsdld@gmail.com",
    "clkasdkskd clkasdkskd@gmail.com",
    "tkasdkaskd tkasdkaskd@gmail.com",
    "2lasdsd 2lasdsd@gmail.com",
    "açsdç açsdç@gmail.com.br",
    "lsdlsdl lsdlsdl@mail.com"
];
var personsOrdered = [];
person.forEach(function (peer) {
    var name = peer.split(' ')[0], email = peer.split(' ')[1], reg = /^.+@gmail\.com$/g, test = reg.test(email);
    console.log(name + " " + email + " " + test);
    if (test)
        personsOrdered.push(name);
});
// const N: number = parseInt(readLine().trim(), 10);
// let peep: string[] = [];
// for (let NItr: number = 0; NItr < N; NItr++) {
//     const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');
//     const firstName: string = firstMultipleInput[0];
//     const emailID: string = firstMultipleInput[1];
//     const reg: RegExp = /^.+@gmail\.com$/g,
//             test: boolean = reg.test(emailID);
//     if (test) peep.push(firstName);
// }
personsOrdered.sort(function (a, b) { return a.localeCompare(b); });
console.log(personsOrdered);
