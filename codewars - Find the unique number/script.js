function findUniq(arr) {

    let uniqueNumber = [];
    let sortedArr = arr.sort(function(a, b){return a-b});
    
    for (i = 0; i < sortedArr.length; i++) {
      if (sortedArr[i] !== sortedArr[i+1] && sortedArr[i] !== sortedArr[i-1]) {
      uniqueNumber.push(sortedArr[i]);
      }
    }
    return uniqueNumber[0];
    }