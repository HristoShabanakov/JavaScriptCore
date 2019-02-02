function solve() {
 let inputText = document.getElementById('arr').value;
 let inputArr = JSON.parse(inputText);

 let result = [];

 for (let i = 0; i < inputArr.length; i++) {
   let product = inputArr[i] * inputArr.length;
   result.push(`${i} -> ${product}`);
 }
let resultElement = document.getElementById('result');
for (let i = 0; i < result.length; i++) {
  let currentParagraph = document.createElement('p');
  currentParagraph.textContent = result[i];

  resultElement.appendChild(currentParagraph);
}
}