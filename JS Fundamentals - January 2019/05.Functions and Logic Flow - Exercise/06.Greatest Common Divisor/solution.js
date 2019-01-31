function greatestCD() {
    let firstNum = document.getElementById('num1').value;
    let secondNum = document.getElementById('num2').value; 
    document.getElementById('result').textContent = action(firstNum, secondNum);
    function action(a, b) {
       if (!b) {
           return a;
       }
       return action(b, a % b);
   }   
 }