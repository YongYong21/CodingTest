function solution(d, budget) { 
  d.sort((a, b) => a - b); 
  let count = 0; 
  for (const cost of d) {    
    if (budget >= cost) { 
      budget -= cost;
      count += 1;
    } 
     else {
      break;
    }
  }
  return count;
}
