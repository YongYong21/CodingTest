function solution(n) {
    let arr = String(n).split('')
    arr = arr.sort().reverse().join('')
    return parseInt(arr)
}