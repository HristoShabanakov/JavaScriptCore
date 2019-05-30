function race(arr) {

    //The shift() method removes the first element from an array and returns that removed element.
    // This method changes the length of the array.
    let pilots = arr.shift().split(" ");

    for (let data of arr) {
        let event = data.split(" ")[0];
        let pilot = data.split(" ")[1];

        switch (event) {
            case "Join":
                if (!pilots.includes(pilot)) {
                    pilots.push(pilot);
                }
                break;
            case "Crash":
                if (pilots.includes(pilot)) {
                    let index = pilots.indexOf(pilot);
                    pilots.splice(index, 1);
                }
                break;
            case "Pit":
                if (pilots.includes(pilot)) {
                    let index = pilots.indexOf(pilot);
                    //We need to move pilots position with one step to the right,
                    //so therefore we need to be careful that we will not get out of the array.
                    if (index !== pilots.length - 1) {
                        pilots.splice(index, 1);
                        pilots.splice(index + 1, 0, pilot);
                    }
                }
                break;

            case "Overtake":
                if (pilots.includes(pilot)) {
                    let index = pilots.indexOf(pilot);
                    if (index !== 0) {
                        pilots.splice(index, 1);
                        pilots.splice(index - 1, 0, pilot);
                    }
                }
                break;
        }
    }
    console.log(pilots.join(" ~ "));
}

race(["Vetel Hamilton Slavi",
    "Pit Hamilton",
    "Overtake Vetel",
    "Crash Slavi"]);