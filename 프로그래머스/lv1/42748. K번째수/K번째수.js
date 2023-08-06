function solution(array, commands) {

    let answer = commands.map(list=>{
        let sortArr = array.slice(list[0]-1, list[1]).sort((a,b)=> a-b)
        return sortArr[list[2]-1]
       
    })
    
    return answer
}