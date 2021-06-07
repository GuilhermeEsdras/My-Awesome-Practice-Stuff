var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var IllegalArgumentException = /** @class */ (function (_super) {
    __extends(IllegalArgumentException, _super);
    function IllegalArgumentException(msg) {
        var _this = _super.call(this, msg) || this;
        Object.setPrototypeOf(_this, IllegalArgumentException.prototype);
        return _this;
    }
    return IllegalArgumentException;
}(Error));
var AssertionError = /** @class */ (function (_super) {
    __extends(AssertionError, _super);
    function AssertionError(msg) {
        var _this = _super.call(this, msg) || this;
        Object.setPrototypeOf(_this, AssertionError.prototype);
        return _this;
    }
    return AssertionError;
}(Error));
function minimum_index(seq) {
    if (seq.length == 0)
        throw new IllegalArgumentException('Cannot get the minimum value index from an empty sequence');
    var min_idx = 0;
    for (var i = 1; i < seq.length; ++i)
        if (seq[i] < seq[min_idx])
            min_idx = 1;
    return min_idx;
}
var TestDataEmptyArray = /** @class */ (function () {
    function TestDataEmptyArray() {
    }
    TestDataEmptyArray.prototype.get_array = function () {
        var arr = [];
        return arr;
    };
    return TestDataEmptyArray;
}());
var testDataEmptyArray = new TestDataEmptyArray();
console.log(testDataEmptyArray.get_array());
var TestDataUniqueValues = /** @class */ (function () {
    function TestDataUniqueValues() {
        this.arr = [];
        for (var i = 1; i < 5; i++)
            this.arr.push(i);
    }
    TestDataUniqueValues.prototype.get_array = function () {
        return this.arr;
    };
    TestDataUniqueValues.prototype.get_expected_result = function () {
        return 1;
    };
    return TestDataUniqueValues;
}());
var testDataUniqueValues = new TestDataUniqueValues();
console.log(testDataUniqueValues.get_array());
console.log(testDataUniqueValues.get_expected_result());
var TestDataWithExactlyTwoDifferentMinimums = /** @class */ (function () {
    function TestDataWithExactlyTwoDifferentMinimums() {
        this.arr = [1, 2, 1, 3, 4];
    }
    TestDataWithExactlyTwoDifferentMinimums.prototype.get_array = function () {
        return this.arr;
    };
    TestDataWithExactlyTwoDifferentMinimums.prototype.get_expected_result = function () {
        return 0;
    };
    return TestDataWithExactlyTwoDifferentMinimums;
}());
var testDataWithExactlyTwoDifferentMinimums = new TestDataWithExactlyTwoDifferentMinimums();
console.log(testDataWithExactlyTwoDifferentMinimums.get_array());
console.log(testDataWithExactlyTwoDifferentMinimums.get_expected_result());
function TestWithEmptyArray() {
    try {
        var seq = testDataEmptyArray.get_array();
        var result = minimum_index(seq);
    }
    catch (e) {
        return;
    }
    throw new AssertionError("Exception wasn't thrown as expected");
}
function TestWithUniqueValues() {
    var seq = testDataUniqueValues.get_array();
    if (seq.length < 2)
        throw new AssertionError("less than 2 elements in the array");
    var tmp = new Array(seq.length);
    for (var i = 0; i < seq.length; ++i)
        tmp[i] = seq[i];
    if (!(__spreadArrays(new Set(tmp)).length == seq.length))
        throw new AssertionError("not all values are unique");
    var expected_result = testDataUniqueValues.get_expected_result();
    var result = minimum_index(seq);
    if (result != expected_result)
        throw new AssertionError("result is different than the expected result");
}
function TestWithExactlyTwoDifferentMinimums() {
    var seq = testDataWithExactlyTwoDifferentMinimums.get_array();
    if (seq.length < 2)
        throw new AssertionError("less than 2 elements in the array");
    var tmp = __spreadArrays(seq);
    tmp.sort(function (a, b) { return a - b; });
    if (!(tmp[0] == tmp[1] && (tmp.length == 2 || tmp[1] < tmp[2])))
        throw new AssertionError("there are not exactly two minimums in the array");
    var expected_result = testDataWithExactlyTwoDifferentMinimums.get_expected_result();
    var result = minimum_index(seq);
    if (result != expected_result)
        throw new AssertionError("result is different than the expected result");
}
TestWithEmptyArray();
TestWithUniqueValues();
TestWithExactlyTwoDifferentMinimums();
console.log("OK");
