function getInfo() {
    let stopId = document.getElementById('stopId').value;
    let url = `https://judgetests.firebaseio.com/businfo/${stopId}.json`;

    fetch(url)
        .then((info) => info.json())
        .then((data) => {
            document.getElementById('stopName').textContent = data.name;
            document.getElementById('buses').innerHTML = '';

            let buses = Object.entries(data.buses);

            for (let [busNumber, busTime] of buses) {
                let listItem = document.createElement('li');
                listItem.textContent = `Bus ${busNumber} arrives in ${busTime} minutes`;
                document.getElementById('buses').appendChild(listItem);
            }

        })
        .catch(error => {
            document.getElementById('stopName').textContent = 'Error';

        })
    document.getElementById('stopId').value = '';
}