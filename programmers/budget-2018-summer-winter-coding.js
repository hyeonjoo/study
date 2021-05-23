/*
 * https://programmers.co.kr/learn/courses/30/lessons/12982
 * Input/Output examples
 * d	          budget	result
 * [1,3,2,5,4]	9	      3
 * [2,2,3,3]	  10    	4
 */
// 1. My first code
function solution(d, budget) {
  var sortedD = d.sort((a, b) => a - b);
  var cnt = 0;
  while (i < sortedD.length) {
    if (budget - sortedD[i] >= 0) {
      budget -= sortedD[i];
      i++;
    } else {
      break;
    }
  }
  return i;
}

// 2. After refering
/* Tried javascript for .. of iteration.
 * And it reduces one time of finding the value from the array by the index.
 * So it'd have better performance than the first code.
 */
function solution(d, budget) {
  var sortedD = d.sort((a, b) => a - b);
  var cnt = 0;
  for (let el of sortedD) {
    if (budget - el < 0) break;
    budget -= el;
    cnt++;
  }
  return cnt;
}
