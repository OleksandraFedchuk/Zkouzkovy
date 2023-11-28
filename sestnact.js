function findNumber(start, end, divisor){
    for (let i = start; i <= end; i++){
        if (i % divisor === 0){
            return i;
        }
    }
}

const result = findNumber(5, 60, 4);
console.log(result);