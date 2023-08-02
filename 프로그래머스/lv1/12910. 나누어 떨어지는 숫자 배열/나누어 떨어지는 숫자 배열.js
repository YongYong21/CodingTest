function solution(arr, divisor) {
    let a = [];
    arr.forEach(item=>{
        if(item % divisor === 0)
            a.push(item)
    })
    
    a.sort((num1, num2) => num1 - num2);
    return a.length > 0 ? a : [-1]
}