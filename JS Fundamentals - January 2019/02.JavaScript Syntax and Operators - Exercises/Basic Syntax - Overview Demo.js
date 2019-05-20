function demo(){
    let firstVar = 5;
    console.log('The type of firstVar is -',typeof firstVar);
    let secondVar = "5";
    console.log('The type of secondVar is -',typeof secondVar);
    
    //"==" check only the value of variable.
    console.log(firstVar == secondVar);

    //"===" check the type of variable.
    console.log(firstVar === secondVar);

    //"` `", we can use string interpolation in JavaScript.
    let name = "Jonh Doe";
    console.log(`My name is ${name}.`);

    console.log(eval('2 + 2'));

    // "var" has a functional scope so it's not recommended to use it.
    for (var i = 0; i <3; i++){
        console.log(i +  " is inside the loop");
    }
    console.log(i + " is outside the scope of the loop");

    // "let" and "const" have a block scope {}.
    
    //In JavaScript when there is "+" forwarded with string performs string concatenation.
    //Expected output: 2111
    console.log(1 + 1 + "1" + 1 + 1);

    //Otherwise performs normal multiplication.
    console.log(2 * 2 * "2" * 2 * 2);
    //Expected output: 32

    //We can divide Number with String and other way around in JavaScript.
    console.log(2 / "2");
    //Expected output: 1

    //Converting string into number.
    console.log(typeof Number("2"));

    //Converting string into number faster way.
    console.log(typeof +("2"));

    //Arrays in JavaScript are working as Objects.
    let ages = [25, 35, 75, 88, 99];
    console.log(typeof ages);

    //Objects in JavaScript have keys and values.
    let car = {
        model: "328",
        brand: "BMW",
        color: "blue",
        turbo: "yes",
    };
    console.log(car);
    console.log(car.color);

    //Adding new keys/values in objects.
    car.sportsPackage = "M package";
    console.log(car.sportsPackage);

    //This is another approach is better to use, no chance of making a mistake when adding values.
    car["tires"] = "summer";
    console.log(car);

    //With "for in loop" we can iterate through each element in object
    for (let element in car) {

        //Print the keys
        console.log(element);

        //Print the values
        console.log(car[element]);

        //Print key pair
        console.log(`key - ${element} | value - ${car[element]}`);

        //Check if property exists in the collection
        console.log(car.hasOwnProperty("color") && car.color==="blue");
    }
    //Oneliner solution using map.
    Object.keys(car).forEach(e => console.log(`key=${e}  value=${car[e]}`));
}
    
demo();