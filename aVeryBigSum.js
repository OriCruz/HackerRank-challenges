const aVeryBigSum = (ar)=>ar.reduce((accumulator, currentValue)=>accumulator+currentValue);

//Testing the function && checking the expected output
console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));