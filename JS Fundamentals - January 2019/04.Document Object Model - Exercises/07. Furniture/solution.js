function solve() {

 let furnitureList;

 let generateButton = document.getElementsByTagName('button')[0]
 .addEventListener('click' ,function(){
    furnitureList = JSON.parse(document.getElementsByTagName('textarea')[0].value);
    
    let table = document.getElementsByClassName('table')[0];

    for (let furniture of furnitureList) {
      let row = table.insertRow();
      let cell = row.insertCell();

      let img = document.createElement('img');
      img.setAttribute('src',furniture.img);
      cell.appendChild(img);
      cell = row.insertCell();

      let name = document.createElement('p');
      name.innerHTML = furniture.name;
      cell.appendChild(name);

      cell = row.insertCell();
      let price = document.createElement('p');
      price.innerHTML = furniture.price;
      cell.appendChild(price);

      cell = row.insertCell();
      let decFactor = document.createElement('p');
      decFactor.innerHTML = furniture.decFactor;
      cell.appendChild(decFactor);

      cell = row.insertCell();
      let checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      cell.appendChild(checkbox);

    }
});
 
  
 

}