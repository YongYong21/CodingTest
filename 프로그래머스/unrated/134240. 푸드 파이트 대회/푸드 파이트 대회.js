function solution(food) {
    let arr = []
    let answer = ''
    for(i=1; i<food.length; i++){
        arr.push(String(i).repeat(parseInt(food[i]/2)))
    }
    
    console.log()
    
    return arr.join('') + 0 + arr.reverse().join('')
}