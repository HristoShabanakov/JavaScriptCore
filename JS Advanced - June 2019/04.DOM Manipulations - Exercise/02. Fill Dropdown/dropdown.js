function addItem() {
    let newItem = document.getElementById('newItemText').value;
    let newValue = document.getElementById('newItemValue').value;

    if(newItem === '' && newValue === ''){
        alert('Please insert some info!');
    }
    let menu = document.getElementById('menu');

    let newOptionElement = document.createElement('option');
    newOptionElement.textContent = `${newItem} ${newValue}`;

    menu.appendChild(newOptionElement);

     document.getElementById('newItemText').value = '';
     document.getElementById('newItemValue').value = '';
}