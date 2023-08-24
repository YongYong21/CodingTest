function solution(answers) {
    let student1 = {slect: [1,2,3,4,5], count:0}
    let student2 = {slect: [2,1,2,3,2,4,2,5], count:0 }
    let student3 = {slect: [3,3,1,1,2,2,4,4,5,5], count:0}
    answers.forEach((v,i)=> {
        if(student1.slect[i%student1.slect.length]=== v)
            student1.count++
        if(student2.slect[i%student2.slect.length]=== v)
            student2.count++
        if(student3.slect[i%student3.slect.length]=== v)
            student3.count++
    })
    let arr = [student1.count,student2.count,student3.count]
    let answer = Math.max(...arr)
    let result = []
    arr.forEach((v,i)=> {
        if(v===answer)
            result.push(i+1)
    })
    
    return result
}