function solution(sizes) {
    let maxW = 0;
    let maxH = 0;

    for (const size of sizes) {
        const [w, h] = size;
        maxW = Math.max(maxW, Math.max(w, h));
        maxH = Math.max(maxH, Math.min(w, h));
    }

    return maxW * maxH;
}
