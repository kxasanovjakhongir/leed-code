let strs = ["flower", "flow", "flight"]
//Output: "fl"

let longestCommonPrefix = function (arr) {
    let i = 1
    let stop =arr[0]
    while (i < arr.length) {
        if (!arr[i].startsWith(stop)) {
            stop = stop.slice(0, -1)
        } else {
            i++
        }
    }
    return stop
};
let start = longestCommonPrefix(strs)
console.log(start);

