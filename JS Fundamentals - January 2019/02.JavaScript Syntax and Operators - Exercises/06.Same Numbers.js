function solve(num){
    num = num.toString();
    let sum = 0;
    let firstElement = num[0];
    let result = true;
    
    for (let i = 0; i < num.length; i++) {
        if(num[i] !==firstElement){
            result = false;
        }
        sum += +num[i];
    }
    console.log(sum);
}

solve(222222);