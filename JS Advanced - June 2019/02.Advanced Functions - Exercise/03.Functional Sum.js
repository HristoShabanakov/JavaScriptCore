function calculate(number) {
    let sum = number;

    function add(nextNumber) {
        sum += nextNumber;
        return add;
    }

    add.toString = function () {
        return sum;
    };
    return add;
}

console.log(calculate(1)(6)(-3).toString())