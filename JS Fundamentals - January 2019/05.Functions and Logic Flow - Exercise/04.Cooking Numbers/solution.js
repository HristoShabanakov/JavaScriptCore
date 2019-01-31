function solve() {
    //save the reference only.
   let number = document.querySelector('#exercise input[type="number"]');
   let output = document.getElementById('output');
   let num;
    //In JS if one of the values is "undefined" and "2" it will return the number.
    //If both of the values are numbers ("5" ||"7") it will return true to the first number.
    function getCurrentNumber(){
         num = +(output.textContent) || number.value;
        return num;
    }
   
   

  function attachedEvents (){

    //:nth-child(n) selector selects all elements that are the nth child, regardless of type, of their parent.
   //The count starts from 1, instead of zero like array collections.
   let chopBtn = document.querySelector('#operations button:nth-child(1)').addEventListener('click',chop);

   let diceBtn = document.querySelector('#operations button:nth-child(2)').addEventListener('click',dice);

   let spiceBtn = document.querySelector('#operations button:nth-child(3)').addEventListener('click',spice);

   let bakeBtn = document.querySelector('#operations button:nth-child(4)').addEventListener('click',bake);

   let filletBtn = document.querySelector('#operations button:nth-child(5)').addEventListener('click',fillet);
   }
   
   attachedEvents();

   function chop(){
       getCurrentNumber();
       num /= 2;
      output.textContent = String(num);
   }

   function dice(){
    getCurrentNumber();
       num =String(Math.sqrt(num));
    output.textContent = num;
   }

   function spice(){
    getCurrentNumber();
    num = String(++num);
    output.textContent = num;
   }

   function bake(){
    getCurrentNumber();
    num =String(num *3);
    output.textContent = num;
   }

   function fillet(){
    getCurrentNumber();
    
    num *= 0.8;
    output.textContent = num;
   }
}
