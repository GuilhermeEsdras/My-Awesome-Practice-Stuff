var _a = '9 6 2015'.split(' ').map(function (v) { return parseInt(v); }), dayReturned = _a[0], monReturned = _a[1], yeaReturned = _a[2];
var _b = '6 6 2015'.split(' ').map(function (v) { return parseInt(v); }), dayDue = _b[0], monDue = _b[1], yeaDue = _b[2];
var fine = 0;
if (yeaReturned < yeaDue)
    fine = 0;
else {
    if (yeaReturned > yeaDue)
        fine = 10000;
    else if (monReturned > monDue)
        fine = 500 * (monReturned - monDue);
    else if (dayReturned > dayDue)
        fine = 15 * (dayReturned - dayDue);
}
console.log(fine);
