function solution(name, yearning, photo) {
    const obj = new Map();
    const answer = [];

    for (let i = 0; i < name.length; i++) {
        obj.set(name[i], yearning[i]);
    }

    photo.forEach(arr => {
        const score = arr.reduce((acc, element) => {
            return acc + (obj.get(element) || 0);
        }, 0);
        answer.push(score);
    });

    return answer;
}
