function processData(input) {
    let evens = [];
    let odds  = [];
    [...input].forEach((letra, i) => {
        if (i % 2 == 0) evens.push(letra);
        else odds.push(letra);
    })
    return `${evens.join('')} ${odds.join('')}`;
}

console.log(processData('Hacker'));