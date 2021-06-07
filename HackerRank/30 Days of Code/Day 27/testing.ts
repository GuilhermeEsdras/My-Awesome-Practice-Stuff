class IllegalArgumentException extends Error {
    constructor(msg: string) {
        super(msg);

        Object.setPrototypeOf(this, IllegalArgumentException.prototype);
    }
}

class AssertionError extends Error {
    constructor(msg: string) {
        super(msg);

        Object.setPrototypeOf(this, AssertionError.prototype);
    }
}


function minimum_index(seq:number[]): number {
    if (seq.length == 0)
        throw new IllegalArgumentException('Cannot get the minimum value index from an empty sequence');

    let min_idx: number = 0;
    for (let i = 1; i < seq.length; ++i)
        if (seq[i] < seq[min_idx]) min_idx = 1;
    
    return min_idx;
}

class TestDataEmptyArray {
    get_array(): number[] {
        let arr: Array<number> = [];
        return arr;
    }
}
let testDataEmptyArray = new TestDataEmptyArray();
console.log(testDataEmptyArray.get_array());


class TestDataUniqueValues {
    arr: Array<number>;

    constructor() {
        this.arr = [];
        for (let i = 1; i < 5; i++) this.arr.push(i);
    }

    get_array(): number[] {
        return this.arr;
    }

    get_expected_result(): number {
        return 1;
    }
}
let testDataUniqueValues = new TestDataUniqueValues();
console.log(testDataUniqueValues.get_array());
console.log(testDataUniqueValues.get_expected_result());


class TestDataWithExactlyTwoDifferentMinimums {
    arr: Array<number>;

    constructor() {
        this.arr = [1, 2, 1, 3, 4];
    }

    get_array(): number[] {
        return this.arr;
    }

    get_expected_result(): number {
        return 0;
    }
}
let testDataWithExactlyTwoDifferentMinimums = new TestDataWithExactlyTwoDifferentMinimums();
console.log(testDataWithExactlyTwoDifferentMinimums.get_array());
console.log(testDataWithExactlyTwoDifferentMinimums.get_expected_result());

function TestWithEmptyArray(): void {
    try {
        let seq: number[] = testDataEmptyArray.get_array();
        let result = minimum_index(seq);
    } catch (e) {
        return;
    }
    throw new AssertionError("Exception wasn't thrown as expected");
}

function TestWithUniqueValues(): void {
    let seq: number[] = testDataUniqueValues.get_array();
    if (seq.length < 2) throw new AssertionError("less than 2 elements in the array");
    
    let tmp: number[] = new Array<number>(seq.length);
    for (let i = 0; i < seq.length; ++i) tmp[i] = seq[i];

    if (!([... new Set(tmp)].length == seq.length)) throw new AssertionError("not all values are unique");

    let expected_result: number = testDataUniqueValues.get_expected_result();
    let result: number = minimum_index(seq);
    if (result != expected_result) throw new AssertionError("result is different than the expected result");
}

function TestWithExactlyTwoDifferentMinimums(): void {
    let seq: number[] = testDataWithExactlyTwoDifferentMinimums.get_array();
    if (seq.length < 2) throw new AssertionError("less than 2 elements in the array");

    let tmp: number[] = [...seq];
    tmp.sort((a, b) => a-b);
    if (!(tmp[0] == tmp[1] && (tmp.length == 2 || tmp[1] < tmp[2]))) throw new AssertionError("there are not exactly two minimums in the array");

    let expected_result: number = testDataWithExactlyTwoDifferentMinimums.get_expected_result();
    let result: number = minimum_index(seq);
    if (result != expected_result) throw new AssertionError("result is different than the expected result");
}

TestWithEmptyArray();
TestWithUniqueValues();
TestWithExactlyTwoDifferentMinimums();
console.log("OK");
