function calculate(arr) {

    let peachKg = 0;
    let cherryKg = 0;
    let plumKg = 0;
    let fruitsForRakiya = 0;

    for (let line of arr) {
        let [fruit, kg] = line.split(/\s+/gm);

        switch (fruit) {
            case "peach":
                peachKg += +(kg);
                break;
            case "cherry":
                cherryKg += +(kg);
                break;
            case "plum":
                plumKg += +(kg);
                break;
            default:
                fruitsForRakiya += +(kg);
                break;
        }
    }
    let cherryKompots = Math.floor(((cherryKg * 1000) / 9) / 25) ;
    let peachKompots = Math.floor(((peachKg * 1000) /140) / 2.5);
    let plumKompots = Math.floor(((plumKg * 1000) /20) / 10);
    let rakiyaLiters = fruitsForRakiya * 0.2;

    console.log(`Cherry kompots: ${cherryKompots}`);
    console.log(`Peach kompots: ${peachKompots}`);
    console.log(`Plum kompots: ${plumKompots}`);
    console.log(`Rakiya liters: ${rakiyaLiters.toFixed(2)}`);
}

calculate(['cherry 1.2',
    'peach 2.2',
    'plum 5.2',
    'peach 0.1',
    'cherry 0.2',
    'cherry 5.0',]);