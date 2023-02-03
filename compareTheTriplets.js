const compareTriplets=(a,b)=>{
    //creating a variable results and inrializing it to 0
    let results=[0,0];
    //mapped thru the first array (a) passing two parameters of item and index, where item was never used because the problem only required to access the elements of the arrays at a certain index to them compare them. If the problem required to change each individual item then the parms of item would've been used.
   a.map((item,index)=>{
    a[index]>b[index]? results[0]++:(a[index]<b[index]? results[1]++:results)
   })
   return results;
}
console.log(compareTriplets([17,28,30]
    ,[17,16,38]));