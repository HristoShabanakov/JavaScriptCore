function solve() {
   //targetDiv returns an array which is reference data type.
   let targetDiv = document.getElementsByClassName('my-message')[0];
   
   let textArea = document.getElementById('chat_input');
   let button = document.getElementById("send");
   let chatMessageArea = document.getElementById("chat_messages");

   button.addEventListener("click",function (){
   //We have to clone targetDiv, otherwise the reference will be pointing at it.
   let targetDivClone = targetDiv.cloneNode(true);
   let textAreaContent = textArea.value;

   if (textAreaContent !== ""){
   targetDivClone.textContent = textAreaContent;

   chatMessageArea.appendChild(targetDivClone);

   textArea.value = "";
     }
   });
}


