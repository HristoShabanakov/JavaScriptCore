function caffeine(days) {

    let coffee = 0; // 150
    let cokes = 0; //250
    let tea = 0;    //350
    let energy = 0; //500
    let consumedCaffeine = 0;

    for (let i = 1; i <= days; i++) {

        coffee += 450;
        cokes += 500;
        tea += 1050;

        if (i % 5 === 0) {
            energy += 1500;
        }

        if (i % 9 === 0) {
            cokes += 1000;
            energy += 1000;
        }
    }

    let totalCoffee = (coffee / 100) * 40;
    let totalCokes = (cokes / 100) * 8;
    let totalTea = (tea / 100) * 20;

    let totalEnergy = (energy / 100) * 30;

    consumedCaffeine = Number(totalCoffee) + Number(totalCokes) + Number(totalTea) + Number(totalEnergy);

    console.log(`${consumedCaffeine} milligrams of caffeine were consumed`);

}

caffeine(8);

