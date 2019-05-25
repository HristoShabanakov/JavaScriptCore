function mainElementManipulator(){
    //Get element by id is always unique. Always there will be ONE Id. It returns one element, not collection.
    let mainElement = document.getElementById("heading");
    //Get text content.
    let mainElementText = mainElement.textContent;
    console.log(mainElement);
}

function secondElementManipulator(){
    //Get elements by tag returns a collection.
    let secondElement = document.getElementsByTagName("h2")[0];

    console.log(secondElement);
}

function thirdElementManipulator(){
    //Get elements by class returns a collection.
    let thirdElement = document.getElementsByClassName("third-heading");
    let textContentThirdElement = thirdElement[0].textContent;
    let coloredTextElement = thirdElement[0].style.color = "blue";

    //Create new element.
    let newElement = document.createElement("div");
    let newElementText = newElement.textContent="New Text Box!";
    //Add the element.
    document.body.appendChild(newElement);

    //Delete element.
    let deleteElement = document.getElementsByClassName("delete")[0];
    document.body.removeChild(deleteElement);
    //console.log(deleteElement);
}

function takeValueFromInputForm(){
    //To get the text from: Forms, Input Menu, Drop-Boxes, Radio Buttons is taken with value!
    let element =document.getElementById("input-heading");
    let usernameField = document.getElementById("username");
    let usernameContent = usernameField.value;
    console.log(usernameContent);
}