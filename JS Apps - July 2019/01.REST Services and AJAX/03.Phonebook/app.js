function attachEvents() {
    document.getElementById('btnLoad')
        .addEventListener('click', function () {

            let url = `https://phonebook‐nakov.firebaseio.com/phonebook.json`;

            fetch(url)
                .then((request) => request.json())
                .then((data) => {
                    let values = Object.values(data);

                    for (let name of values) {
                        let contactName = name;
                        let phoneNumber = name.phone;

                        let deleteButton = document.createElement('button');
                        deleteButton.textContent = 'DELETE';

                        let listItem = document.createElement('li');
                        listItem.textContent = `${contactName}: ${phoneNumber}`

                    }
                });
        });
}

attachEvents();