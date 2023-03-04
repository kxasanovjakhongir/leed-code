let p = [1,2]
let q = [1,null,2]

function start(p,q){
    let x=p.length
    let y=q.length
    for(let i=0;i<x;i++){
        let min=i
        for(let j=0;j<y;j++){
            if(p[i]==q[j]){
                return true
            }else  return false
        }
    }
}
let stop=start(p,q)
console.log(stop);