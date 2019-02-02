function solve (arr){

    let resultArr = arr.reduce((acc, element, index) => {
        if(element ==='add'){
            acc.push(index + 1);
        }else if(element ==='remove'){
            acc.pop();
        }
        return acc;
    }, []);

    if(resultArr.length > 0){
        console.log(resultArr.join('\n'));
    }else{
        console.log('Empty')
    }
}

solve([ ' add' , ' add' , ' add' , ' add' ]);