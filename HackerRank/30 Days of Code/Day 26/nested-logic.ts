let [dayReturned, monReturned, yeaReturned] = /* readLine() */'9 6 2015'.split(' ').map((v) => parseInt(v));
let [dayDue, monDue, yeaDue] = /* readLine() */'6 6 2015'.split(' ').map((v) => parseInt(v));

let fine: number = 0;

if (yeaReturned < yeaDue) fine = 0;
else {
    if (yeaReturned > yeaDue) fine = 10000;
    else if (monReturned > monDue) fine = 500 * (monReturned - monDue);
    else if (dayReturned > dayDue) fine = 15 * (dayReturned - dayDue);
}

console.log(fine);
