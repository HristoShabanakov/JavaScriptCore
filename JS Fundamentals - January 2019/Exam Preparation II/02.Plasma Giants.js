function plasmaGiants(arr, cutSize) {
    let firstPart = arr.slice(0, arr.length / 2);


    let secondPart = arr.slice(arr.length / 2);

    let firstGiantLife = 0;
    let secondGiantLife = 0;

    while (firstPart.length > 0 && secondPart.length > 0) {
        firstGiantLife += +firstPart.splice(0, cutSize).reduce((a, b) => a * b);

        secondGiantLife += +secondPart.splice(0, cutSize).reduce((a, b) => a * b);
    }
    //Destructure with ... operator we can take the numbers from a collection.
    let damagePerHit = Math.min(...arr);
    let deadLine = Math.max(...arr);
    let rouds = 1;
    let minLife = Math.min(firstGiantLife, secondGiantLife);
    let remaingHealthPoints = minLife - deadLine;

    if (remaingHealthPoints <= damagePerHit) {

        let hitsCounter = 1;
        if (remaingHealthPoints % damagePerHit === 0) {
            hitsCounter = remaingHealthPoints / damagePerHit;
        } else {
            hitsCounter = Math.ceil(remaingHealthPoints / damagePerHit);
        }
    }

    if (damagePerHit !== 0) {
        while (firstGiantLife > deadLine && secondGiantLife > deadLine) {
            firstGiantLife -= damagePerHit;
            secondGiantLife -= damagePerHit;
            rouds++;
        }
    }

    if(firstGiantLife === secondGiantLife){
        console.log(`Its a draw ${firstGiantLife} - ${secondGiantLife}`);
    }else if(firstGiantLife > secondGiantLife){
        console.log(`First Giant defeated Second Giant with result ${firstGiantLife} - ${secondGiantLife} in ${rouds} rounds`);
    }else {
        console.log(`Second Giant defeated First Giant with result ${secondGiantLife} - ${firstGiantLife} in ${rouds} rounds`);
    }
}

plasmaGiants([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3);