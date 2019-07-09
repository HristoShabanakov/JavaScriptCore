// NOTE: The comment sections inside the index.html file is an example of how suppose to be structured the current elements.
//       - You can use them as an example when you create those elements, to check how they will be displayed, just uncomment them.
//       - Also keep in mind that, the actual skeleton in judge does not have this comment sections. So do not be dependent on them!
//       - Тhey are present in the skeleton just to help you!


// This function will be invoked when the html is loaded. Check the console in the browser or index.html file.
function mySolution() {

    let inputSection = document.querySelector("#inputSection > textarea");
    let usernameSection = document.querySelector('input[type="username"]');;
    let sendButton = document.querySelector("#inputSection > div > button");
    let pendingQuestions = document.getElementById('pendingQuestions');

    sendButton.addEventListener('click', createQuestion);



    function createQuestion() {





        let createDiv = document.createElement('div') //setAttribute("class", "pendingQuestion");
        let attribute = document.createAttribute('class');
        attribute.value = 'pendingQuestion';
        createDiv.setAttributeNode(attribute);
        let createImg = document.createElement('img');
        createImg.src = "./images/user.png";
        createImg.style.height = "32px";
        createImg.style.width = "32px";
        let createUsername = document.createElement('span');
        createUsername.textContent = usernameSection.value;
        let createParagraph = document.createElement('p');
        createParagraph.textContent = inputSection.value;

        let createDivAction = document.createElement('div');
        let divActionAttribute = document.createAttribute('class');
        divActionAttribute.value = 'actions';
        createDivAction.setAttributeNode(divActionAttribute);

        let createArchiveButton = document.createElement('button');
        let archiveButtonAttribute = document.createAttribute('class');
        archiveButtonAttribute.value = 'archive';
        createArchiveButton.textContent = 'Archive';
        createArchiveButton.setAttributeNode(archiveButtonAttribute);

        let createOpenButton = document.createElement('button');
        let createOpenbtnAttribute = document.createAttribute('class');
        createOpenbtnAttribute.value = 'open';
        createOpenButton.textContent = 'Open';
        createOpenButton.setAttributeNode(createOpenbtnAttribute);

        createDiv.appendChild(createImg);
        createDiv.appendChild(createUsername);
        createDiv.appendChild(createParagraph);
        createDivAction.appendChild(createArchiveButton);
        createDivAction.appendChild(createOpenButton);

        createDiv.appendChild(createDivAction);


        pendingQuestions.appendChild(createDiv);


    }
}