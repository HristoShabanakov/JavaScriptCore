function radar(input){
let speed = +input[0];
let area = input[1];

let motorway = 130;
let interstate = 90;
let city = 50;
let residential = 20;


switch(area){
    case"residential":
    if(speed > residential && speed <= 40){
        console.log("speeding");
    }else if(speed > residential && speed <= 60){
        console.log("excessive speeding");
    }else if(speed > residential) {
        console.log("reckless driving");
    }
    break;

    case"city":
    if(speed > city && speed <=70){
        console.log("speeding");
    }else if(speed > city && speed <=90){
        console.log("excessive speeding");
    }else if(speed > city) {
        console.log("reckless driving");
    }
    default:
    break;

    case"interstate":
    if(speed > interstate && speed <=110){
        console.log("speeding");
    }else if(speed > interstate && speed <=130){
        console.log("excessive speeding");
    }else if(speed < interstate){
        console.log("reckless driving");
    }
    break;

    case"motorway":
    if(speed > motorway && speed <=150){
        console.log("speeding");
    }else if(speed > motorway && speed <=170){
        console.log("excessive speeding");
    }else if(speed < motorway){
        console.log("reckless driving");
    }
    break;
}
}

radar([150, 'city']);