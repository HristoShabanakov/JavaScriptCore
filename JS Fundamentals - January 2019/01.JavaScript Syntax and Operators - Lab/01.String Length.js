function solve(str1, str2, str3){
    let sumLength;
    let averageLength;

    let firstStringLength = str1.length;
    let secondStringLength = str2.length;
    let thirdStringLength = str3.length;

    sumLength = firstStringLength + secondStringLength + thirdStringLength;
    averageLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(averageLength);
}

solve('chocolate', 'ice cream', 'cake');