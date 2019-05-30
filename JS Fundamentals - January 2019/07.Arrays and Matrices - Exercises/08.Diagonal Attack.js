function diagonalAttack(arrayOfStrings) {
//Input come as array of strings, we have to make it into array of numbers.
    let matrixOfNumbers = arrayOfStrings.map((element) => {
        return element.split(" ")
    });

    for (let i = 0; i < matrixOfNumbers.length; i++) {
        //Since map method returns a new array, we have to override the current one.
        matrixOfNumbers[i] = matrixOfNumbers[i].map(Number);
    }

    let sumFirstDiagonal = 0;
    let sumSecondDiagonal = 0;

    for (let i = 0; i < matrixOfNumbers.length; i++) {
        sumFirstDiagonal += matrixOfNumbers[i][i];
        sumSecondDiagonal += matrixOfNumbers[i][matrixOfNumbers.length - i - 1]
    }
    if (sumFirstDiagonal === sumSecondDiagonal) {

        for (let row = 0; row < matrixOfNumbers.length; row++) {

            for (let col = 0; col < matrixOfNumbers.length; col++) {
                if (row !== col && (row + col) !== matrixOfNumbers.length - 1) {
                    matrixOfNumbers[row][col] = sumSecondDiagonal;
                }
            }
        }
        matrixOfNumbers.forEach(x => console.log(x.join(" ")));
    } else {
        matrixOfNumbers.forEach(x => console.log(x.join(" ")));
    }

}

diagonalAttack(
    ['5 3 12 3 1',
        '11 4 23 2 5',
        '101 12 3 21 10',
        '1 4 5 2 2',
        '5 22 33 11 1']);