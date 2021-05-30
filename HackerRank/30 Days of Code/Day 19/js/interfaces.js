// 'use strict';
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.divisorSum = function (n) {
        var sum = 0;
        for (var i = 1; i <= n; i++) {
            if (n % i == 0)
                sum += i;
        }
        return sum;
    };
    return Calculator;
}());
function main() {
    // Enter your code here
    var n = parseInt(/* readLine() */ '2');
    var myCalculator = new Calculator();
    var sum = myCalculator.divisorSum(n);
    console.log("I implemented: AdvancedArithmetic");
    console.log(sum);
}
main();
