const calculateFactorial = (num) =>{
    let factor = 1;
    for(let i = 1; i <= num; i++){
        factor = factor*i;
    }
    return factor;
}

console.log(calculateFactorial(5));