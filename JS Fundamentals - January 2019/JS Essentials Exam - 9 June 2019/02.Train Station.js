function train(wagonCapacity, passengers) {

    let train = [];

    let leftOvers = 0;


    for (let i = 0; i < passengers.length; i++) {

        leftOvers += passengers[i];

        if (leftOvers <= wagonCapacity) {
            train.push(leftOvers);
            leftOvers = 0;

        } else {
            leftOvers -= wagonCapacity;

            train.push(wagonCapacity);
        }
    }

    console.log(train);
    if (leftOvers === 0) {
        console.log("All passengers aboard");
    } else {
        console.log(`Could not fit ${leftOvers} passengers`);
    }
}

train(6, [5, 15, 2]);