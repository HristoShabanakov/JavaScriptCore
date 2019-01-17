function solve(fruit, weight, kg){

    let weightInKg = weight / 1000;
    let price = weightInKg * kg;
    console.log(`I need ${price.toFixed(2)} leva to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}

solve("apple",1563, 2.35);