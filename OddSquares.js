function oddSquares(arr) {
   
    const oddNumbers = arr.filter(num => num % 2 !== 0);
    const squaredOdds = oddNumbers.map(num => num * num);
  return squaredOdds;
}




function oddSquares(arr) {
  
    let filteredArray = arr.filter(function(num) {
        return num % 2 !== 0;
    });
    let mappedArray = filteredArray.map(function(num) {
        return num * num;
    });
     return mappedArray;
}
