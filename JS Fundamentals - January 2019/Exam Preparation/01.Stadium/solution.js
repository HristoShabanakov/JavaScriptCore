function solve() {
    window.onload=function(){
        let targetDiv = document.getElementById("Levski").getElementsByClassName("seat")[0];
        targetDiv.textContent = "Hello";
    let seat = document.getElementsByClassName("seat")[0].className;
    let levski = document.getElementById("exercise").className;
    seat.onclick
    console.log(levski);

    let seatElement = document.getElementById('seat');
    seatElement.addEventListener('click', buttonClick);

        let but = document.querySelector('exercise.Levski.seat').value;
        console.log(but);
    

    buttonClick.addEventListener('click', () => {
        let btn = document.getElementById('seat').value;
        console.log(seatElement);
    });
   }
}
