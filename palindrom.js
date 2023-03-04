let  isPalindrome = function(x) {
    if(x<0) return false

    let one=0
    for(let i=x;i>=1;i=Math.floor(i/10)){
        one=one*10+i%10
    }
    return one===x
  };