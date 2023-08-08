function solution(s) {
    const charIndexMap = new Map(); 
    const answer = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (charIndexMap.has(char)) {
            const lastIndex = charIndexMap.get(char);
            answer.push(i - lastIndex);
        } else {
            answer.push(-1);
        }

        charIndexMap.set(char, i); 
    }
    console.log(charIndexMap)
    return answer;
}
