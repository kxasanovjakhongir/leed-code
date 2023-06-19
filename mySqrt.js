var mySqrt = function (x) {
    if(x<2){
        return x
    }
    for(let i=1;i<=x;i++){
        if(i*i>x){
            return i-1
        }
    }
};
console.log(mySqrt(1));