function solution(numbers) {
    let sum = 45;
    numbers.forEach(n=>{
        sum -= n
    })
    return sum
}