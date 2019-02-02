function solve() {
 let inputText = document.getElementById('arr').value;
 let inputArr = JSON.parse(inputText);
 let evenNumbers = [];

 for (let i = 0; i < inputArr.length; i++) {
   const element = inputArr[i];

   if(i % 2 ==0){
     evenNumbers.push(element);
   }
 }
 
let resultElement = document.getElementById('result');
let resultText = evenNumbers.join(' x ');
 resultElement.textContent = resultText;
}