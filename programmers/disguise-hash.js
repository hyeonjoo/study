/*
 * https://programmers.co.kr/learn/courses/30/lessons/42578
 * Get combination of clothes, but put on one of them at least.
 *
 * Input/Output examples
 * clothes                                                                                  return
 * [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]	5
 * [["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]]	            3
 */

// 1. My first code
function solution(clothes) {
  var answer = 1;
  var clothesSet = {};
  clothes.forEach((el) => {
    if (!clothesSet[el[1]]) clothesSet[el[1]] = {};
    clothesSet[el[1]][el[0]] = {};
  });
  for (var el in clothesSet) {
    answer = answer * (Object.keys(clothesSet[el]).length + 1);
  }
  return answer - 1;
}

// 2. After trying Set
function solution(clothes) {
  var answer = 1;
  var clothesSet = {};
  clothes.forEach((el) => {
    if (!clothesSet[el[1]]) clothesSet[el[1]] = new Set();
    clothesSet[el[1]].add(el[0]);
  });
  for (var el in clothesSet) {
    answer = answer * (clothesSet[el].size + 1);
  }
  return answer - 1;
}
