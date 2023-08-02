function solution(arr) {
    let num = Math.min(...arr)
    return arr.length > 1 ? arr.filter(n => n!==num) : [-1]
}