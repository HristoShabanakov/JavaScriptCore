function demo() {

    console.log(1 + "2" + "2");
//When we have addition it will perform string concatenation. Output: 122
//If it is multiply will perform the Mathematical operation. 1 * 2 * 2 = 4;

    console.log(1 + +"2" + "2");
//Plus "+" before string value turns it into number value. Output: 32

    console.log(1 + -"1" + 2);
//Output : 02

    console.log(+"1" + "1" + "2");
//Output :112

    console.log("A" - "B" + "2");
//In Javascript you cannot subtract two strings it will return NAN.
//Output: NaN2

    console.log("A" - "B" + 2);
//Non number + number is equal to NaN.
//Output: NaN

    //What do the following lines output, and why?
    console.log(1 < 2 < 3);
    //Output : true 1 is smaller than 2 and 2 is smaller than 3.

    console.log(3 > 2 > 1);
    //Output : false
    //Checks if 3 is bigger than 2 and returns "true".
    //Then compare if "true" is bigger than 1 (one is the value of true) which is not and return "false".
}

demo();
