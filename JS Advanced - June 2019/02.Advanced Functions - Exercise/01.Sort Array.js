function sort(arr, order) {

    if (order === 'asc') {
        return arr.map(Number).sort((a, b) => a - b);
    } else if (order === 'desc') {
        return arr.map(Number).sort((a, b) => b - a);
    }
}

console.log(sort([3, 1, 2, 10], 'asc'));