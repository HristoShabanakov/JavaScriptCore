function coffeeStorage() {
    let textarea = JSON.parse(document.querySelector('textarea').value);
    let [report, inspection] = document.getElementsByTagName('p');

    let brands = {};

    for (let tokens of textarea) {
        let [command, brand, subBrand, date, quantity] = tokens.split(', ');

        if (command === 'IN') {
            if (!brands[brand]) {
                brands[brand] = {};
            }

            if (!brands[brand][subBrand]) {
                brands[brand][subBrand] = {date, quantity: Number(quantity)};
            }

            if (brands[brand][subBrand].date === date) {
                brands[brand][subBrand] = {date, quantity: Number(quantity)};
            }

            if (brands[brand][subBrand].date < date) {
                brands[brand][subBrand] = {date, quantity: Number(quantity)};
            }

        } else if (command === 'OUT') {
            if (brands[brand] &&
                brands[brand][subBrand] &&
                brands[brand][subBrand].date > date &&
                brands[brand][subBrand].quantity >= Number(quantity)) {
                brands[brand][subBrand].quantity -= Number(quantity);
            }

        } else if (command === 'REPORT') {
            Object.entries(brands).forEach(([brand, subBrand]) => {
                let res = [];

                Object.entries(subBrand).map(([name, info]) => {
                    res.push(`${name} - ${info.date} - ${info.quantity}.`);
                });

                report.innerHTML += `${brand}: ${res.join(' ')}` + '<br />';
            });

        } else if (command === 'INSPECTION') {
            Object.entries(brands)
                .sort((a, b) => a[0].localeCompare(b[0]))
                .forEach(([brand, subBrand]) => {
                    let res = [];

                    Object.entries(subBrand)
                        .sort((a, b) => b[1].quantity - a[1].quantity)
                        .forEach(([name, info]) => {
                            res.push(`${name} - ${info.date} ${info.quantity}.`);
                        });
                });
            inspection.innerHTML += `${brand}: ${res.join(' ')}` + '<br />';
        }
    }
}