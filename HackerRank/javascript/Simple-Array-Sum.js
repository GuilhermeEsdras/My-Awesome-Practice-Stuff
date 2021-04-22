/*
 * Complete the simpleArraySum function below.
 */
function simpleArraySum(ar) {
    /*
     * Write your code here.
     */
    return ar.reduce((ant, at) => ant + at)
}

var arr = [1, 2, 3, 4, 10, 11]

console.log(simpleArraySum(arr));