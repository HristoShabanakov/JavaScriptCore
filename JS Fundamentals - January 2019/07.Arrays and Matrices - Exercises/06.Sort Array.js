function solve(arr){
let sortedArray = arr.sort((a, b) => {
    return a.length - b.length || a.localeCompare(b);
});

console.log(sortedArray.join('\n'));
}