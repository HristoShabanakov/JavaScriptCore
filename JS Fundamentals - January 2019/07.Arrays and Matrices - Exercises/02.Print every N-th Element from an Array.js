function solve(arr){
    let lastElement = Number(arr.pop());

    let resultArr = arr.reduce((acc, element, index) => {
        if(index % lastElement ===0){
            acc.push(element);
        }
        return acc;
    }, []);

   console.log(resultArr.join('\n'));
}

solve(['5', '20', '31', '4', '20', '2'])