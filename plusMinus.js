const plusMinus=(arr)=>{
    let positives = 0;
    let negatives= 0;
    let neutral = 0;
    //first sort the given array from smallest to greatest
    //then iterate thru it and check if it postivie, negative or zero
    // increment the value of each variable when the condition meets 
    arr.sort().map(x =>x>0?positives++:(x<0?negatives++:neutral++));
    //create an empty array and push the values in 
    //return each element in the array with their corresponding ratio and 6 deciaml places
    let result =[];
    result.push(positives, negatives, neutral)
    return result.map(x=>console.log((x/arr.length).toFixed(6)));    
}

plusMinus([-4, 3, -9 ,0, 4, 1]); 