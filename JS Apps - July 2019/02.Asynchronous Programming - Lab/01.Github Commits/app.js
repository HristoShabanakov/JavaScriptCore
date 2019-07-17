function loadCommits() {
    let userName = document.getElementById('username').value;
    let repository = document.getElementById('repo').value;
    let contentDiv = document.getElementById('commits');
    contentDiv.innerHTML = "Loading...";

    //Http Errors:
    //starting with 300 - giving information
    //starting with 400 - user did something wrong
    //starting with 500 - server error

    fetch(`https://api.github.com/repos/${userName}/${repository}/commits`)
        .then(response => {
            if (response.status >= 400) {
                throw new Error(response.err);
            }
            return response.json();
        })
        .then(data => {
            contentDiv.innerHTML = "";
            let messages = data.map((item) => {
                return item.commit.message;
            });

            for (const key in messages) {
                if (messages.hasOwnProperty(key)) {
                    const message = messages[key];
                    contentDiv.innerHTML += `<h1>${message}</h1>`;
                }
            }
            console.log(messages);
        }).catch(err => {
            contentDiv.innerHTML = "No data avaiable";
            console.log("Custom Error", err);
        })
}