function objectDemo(){
    
    let human = {
        name:"Man",
        age:25,
        gender:"male",
    };

    human.hobby = "sport";
    human["weight"] = 77;

    //Print object by key value pair.
    for (const kvp in human) {
        console.log(human);
    };
    //Print object by keys.
    for (const kvp in human) {
        console.log(kvp);
    };
    //Print object by values.
    for (const kvp in human) {
        console.log(human[kvp]);
    };
}

objectDemo();