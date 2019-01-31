function validate() {

    let weightArray = [2,4,8,5,10,9,7,3,6];
    let sum = 0;

    //we pass through each element in order to access the button.
   document.querySelector('#exercise > fieldset > div > button').addEventListener('click',validateNumber);

   function validateNumber(){
      let input = document.querySelector('#exercise > fieldset > div > input').value;

     let lastDigit = input[input.length-1];

     for (let i = 0; i < 9; i++) {
         let temp1 = input[i];
         let temp2 = weightArray[i];

         sum += temp1 * temp2;
     }

     let remainder = sum % 11;

     if(remainder===10){
           remainder=0; 
     }

     let response = document.getElementById('response');

     if(+lastDigit === remainder){
         response.textContent = 'This number is Valid!';   
        
     }else{
        response.textContent = 'This number is NOT Valid!';  
     }
   }
}