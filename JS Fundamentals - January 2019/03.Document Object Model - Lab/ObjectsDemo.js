function objectsDemo() {

//How do you clone an object
// We cannot do it "let firstObj = secondObj", because Arrays in JS are reference data type.
// When a variable refers to an object which includes array, the value is the reference to the object.
    let firstObj = {
        name: "first",
        age: 2222
    };

    let secondObj = { };

    for (let kvp in firstObj) {
        if(!secondObj.hasOwnProperty(kvp)){
            secondObj[kvp] = firstObj[kvp];
        }
    }

//The Object.assign() method is used to copy the values of all enumerable
// own properties from one or more source objects to a target object.
// It will return the target object.
    let thirdObj = Object.assign(firstObj);

    console.log(thirdObj);
}