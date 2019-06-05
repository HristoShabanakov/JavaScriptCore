function demo() {

    let objectOfNames = {
        1: "Yasen",
        2: "Gabi",
        3: "Stamat",
        4: "Bilyana",
        5: "Ico"
    };

    //Get the values of object.
    let valuesOfObj = Object.values(objectOfNames);


    //The values now are an array, sorted alphabetically.
    valuesOfObj.sort((a, b) => a.localeCompare(b));

    //Sort by length
    valuesOfObj.sort((a, b) => a.length - b.length);

    //console.log(valuesOfObj);

    let objectOfNumbers = {
        Yasen: 18754,
        Gabi:22,
        Stamat:389,
        Bilyana:4879,
        Ico:555,
    };

    let valuesOfObjectOfNumbers = Object.values(objectOfNumbers);

    //Sort numbers by ascending order.
    valuesOfObjectOfNumbers.sort((a,b) => a - b);

    console.log(valuesOfObjectOfNumbers);

}

demo();