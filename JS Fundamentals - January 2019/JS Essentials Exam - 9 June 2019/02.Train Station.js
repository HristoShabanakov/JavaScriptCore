function train(wagonCapacity, passengers) {

    let train = new Array(passengers.length).fill(0);

    let leftOvers = 0;
    let nextWagon = 0;

    for (let i = 0; i < passengers.length; i++) {

        nextWagon = passengers[i] + leftOvers;

        if (nextWagon < wagonCapacity) {
            train[i] = passengers[i];

        } else {
            leftOvers += passengers[i] - wagonCapacity;

            train[i] = wagonCapacity;
        }
    }

    if (leftOvers === 0) {
        console.log(train.join(', '));

        console.log("All passengers aboard");
    } else {
        console.log(train.join(', '));
        console.log(`Could not fit ${leftOvers} passengers`);
    }
}

train(6, [5, 15, 2]);