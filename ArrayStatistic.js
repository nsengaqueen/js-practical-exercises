function arrayStats(arr){

    const sum = arr.reduce((sum, num) => {
        return sum + num;
    }, 0);
    const average = sum / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const statsObject = {
        sum: sum,
        average: average.toFixed(2),  
        max: max,
        min: min
    };
 return statsObject;
}

console.log(arrayStats([1, 2, 3, 4, 5]));
