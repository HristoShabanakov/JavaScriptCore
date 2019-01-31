function solve() {
   function solve() {
      let num = +document.getElementById('num').value;
      let result = '';
      for(let i = 1; i <= num; i++){
         if(num % i === 0){
            result += `${i} `;
         }
      }
      result = result.trim();
      document.getElementById('result').textContent = result;
   }
}