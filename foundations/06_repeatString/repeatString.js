function repeatString(str, a) {
    if(a<0){
        return "ERROR";
    }
    else{
        let temp="";
        for (let x=0;x<a;x++){
            temp+=str;
        }
        return temp;
    }
}
// Do not edit below this line
module.exports = repeatString;
