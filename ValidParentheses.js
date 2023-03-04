let s = "]}"
var isValid = function (s) {
    let arr = []
    for (let i = 0; i < s.length; i++) {
        let x = s[i]
        switch (x) {
            case '(': arr.push(')');
                break
            case '[': arr.push(']');
                break
            case '{': arr.push('}');
                break
            default:
                if(x!==arr.pop()){
                    return false
                }
        }
    }return arr.length===0
};

console.log(isValid(s));
// console.log(true && false && true);
// console.log(s.length);