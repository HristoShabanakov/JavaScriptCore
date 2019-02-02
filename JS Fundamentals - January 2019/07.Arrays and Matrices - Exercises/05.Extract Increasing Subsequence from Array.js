function solve(arr){
    let min = 0;
    let resultArr = arr.reduce((acc, element) =>{
        if(element >= min){
            acc.push(element);
            min = element;
        }
        return acc;
    },[]);

    console.log(resultArr.join('\n'));
}