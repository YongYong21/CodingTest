function solution(n, arr1, arr2) {
  const map = [];
  for (let i = 0; i < n; i++) {
    const binaryMap = (arr1[i] | arr2[i]).toString(2).padStart(n, '0');
    const row = binaryMap.replace(/0/g, ' ').replace(/1/g, '#');
    map.push(row);
  }
  return map;
}
