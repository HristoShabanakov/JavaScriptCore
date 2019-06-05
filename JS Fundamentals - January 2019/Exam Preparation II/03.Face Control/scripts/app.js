function getData() {

    let input = JSON.parse(document.querySelector('textarea').value);
    let pplIn = document.querySelector('#peopleIn p');
    let blackListP = document.querySelector('#blacklist p');
    let pplOut = document.querySelector('#peopleOut p');
    let lastElement = input.pop();

    let peopleIn = [];
    let peopleOut = [];
    let blackList = [];

    for (let person of input) {

        let action = person.action;
        let currentName = {
            firstName: person.firstName,
            lastName: person.lastName,
        }

        if (action === 'peopleIn') {
            if (!blackList.find(p => p.firstName === currentName.firstName && p.lastName === currentName.lastName)) {
                peopleIn.push(currentName);
            }
        } else if (action === 'peopleOut') {
            if (peopleIn.find(p => p.firstName === currentName.firstName && p.lastName === currentName.lastName)) {
                let index = peopleIn
                    .findIndex((p => p.firstName === currentName.firstName && p.lastName === currentName.lastName));

                peopleIn.splice(index, 1);
                peopleOut.push(currentName);
            }
        } else if (action === 'blacklist') {
            if (peopleIn.find(p => p.firstName === currentName.firstName && p.lastName === currentName.lastName)) {
                let index = peopleIn
                    .findIndex((p => p.firstName === currentName.firstName && p.lastName === currentName.lastName));

                peopleIn.splice(index, 1);
                peopleOut.push(currentName);
            }
            blackList.push(currentName);
        }
    }
    let output = {};
    output['peopleIn'] = peopleIn;
    output['peopleOut'] = peopleOut;
    output['blacklist'] = blackList;

    if (lastElement.action !== '' && lastElement.criteria !== '') {
        let criteria = lastElement.criteria;
        //sort all people in alphabetically
        output[lastElement.action] = output[lastElement.action]
            .sort((a, b) => a[criteria].localeCompare(b[criteria]));
    }

    pplIn.textContent = output.peopleIn
        .map(x => JSON.stringify(x))
        .join(' ');

    pplOut.textContent = output.peopleOut
        .map(x => JSON.stringify(x))
        .join(' ');

    blackListP.textContent = output.blacklist
        .map(x => JSON.stringify(x))
        .join(' ');
}