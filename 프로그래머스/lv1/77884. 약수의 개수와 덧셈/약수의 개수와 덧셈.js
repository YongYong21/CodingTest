function solution(left, right) {
  let sum = 0;
  for (let num = left; num <= right; num++) {
    let count = 0;
    for (let i = 1; i * i <= num; i++) {
      if (num % i === 0) {
        if (i * i === num) {
          count++;
        } else {
          count += 2;
        }
      }
    }
    sum += (count % 2 === 0) ? num : -num;
  }
  return sum;
}