function removeFromArray(arr,...a) {
    for(let x=0;x<=a.length;x++){
        arr= arr.filter(num => num!==a[x]);
    }
    return arr;       
}
 console.log(removeFromArray([1,2,3,4,5,6],"1",3));
// Do not edit below this line
module.exports = removeFromArray;
