function solve() {
    //Get all the buttons.
   let buttons = document.getElementsByTagName('button');
    //Get all the divs and put them in array.
   let divElements = document.getElementsByTagName('div');
    let fieldSets = document.getElementsByTagName('fieldset');

   let obj ={};

   buttons[0].addEventListener('click', addNewTruck);
   buttons[1].addEventListener('click', addNewTireSet);
   buttons[2].addEventListener('click', goToWork);
   buttons[3].addEventListener('click', endOfShiftInfo);

function addNewTruck(){
    let plateNumber = document.getElementById('newTruckPlateNumber').value;
    let tires = document.getElementById('newTruckTiresCondition').value.split(' ').map(Number);

    //If the object plateNumber does not exist, create a new object of it.
    if(!obj[plateNumber]){
        obj[plateNumber] = {
            tires,
            'distance' : 0
        }
        //We have to add the truck into the last div of the template.html
        let currentTruck = createElement('div', plateNumber, 'truck');
        let parentTruck = fieldSets[4].lastElementChild;
        parentTruck.appendChild(currentTruck);
    }

    
    
}

function createElement(type, text, className){
    let element = document.createElement(type);
    element.textContent = text;
    element.classList.add(className);
    return element;
}

  
}