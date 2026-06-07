function sumAll(a,b){
    let sum=0;
    if (typeof a !== 'number' || typeof b !== 'number' || a<0 || b<0 ||
         Math.floor(a)!==a || Math.floor(b)!==b ){
        return 'ERROR';
    }
    else if (b>a){    
        for(let x=a;x<b+1;x++){
            sum=sum+x;
        }
        return sum;
    }
    else{
        for(let x=b;x<a+1;x++){
            sum=sum+x;
        }
        return sum;
    }
}

console.log(sumAll(10, 1));
// Do not edit below this line
module.exports = sumAll;
