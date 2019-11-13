function createPhoneNumber(numbers){
    let counter = numbers.length;
    let partOne = []; 
    let partTwo = [];
    let partThree = [];
    
    for (i =0; i < 3; i++) {
    partOne.push(numbers[i]);
    } 
    for (i = 3; i < 6; i++) {
    partTwo.push(numbers[i]);
    } 
    for (i = 6; i < 10; i++) {
    partThree.push(numbers[i]);
    } 
    return '(' + partOne.join('') + ') ' + partTwo.join('') + '-' + partThree.join('');
  }