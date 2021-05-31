/*
 * https://programmers.co.kr/learn/courses/30/lessons/60057
 * Input/Output examples
 *  s	                        result
 * "aabbaccc"	                7
 * "ababcdcdababcdcd"	        9
 * "abcabcdede"	              8
 * "abcabcabcabcdededededede"	14
 * "xababcdcdababcdcd"	      17
 */
// 1. First code
function solution(s) {
  var limit = Math.ceil(s.length / 2);
  var answer = [];
  for (var i = 1; i <= limit; i++) {
    var keyword = s.substr(0, i);
    var cnt = 1;
    var res = 0;
    for (var j = i; j < s.length; j += i) {
      var str = s.substr(j, i);
      if (keyword === str) {
        cnt++;
      } else {
        res +=
          cnt > 1 ? cnt.toString().length + keyword.length : keyword.length;
        cnt = 1;
        keyword = str;
      }
    }
    res += cnt > 1 ? cnt.toString().length + keyword.length : keyword.length;
    answer.push(res);
  }
  return Math.min(...answer);
}

// 2. After refering
/*
 * Applied just the basic way to get the minimum value.
 */
function solution(s) {
  var limit = Math.ceil(s.length / 2);
  var answer = s.length;
  for (var i = 1; i <= limit; i++) {
    var keyword = s.substr(0, i);
    var cnt = 1;
    var res = 0;
    for (var j = i; j < s.length; j += i) {
      var str = s.substr(j, i);
      if (keyword === str) {
        cnt++;
      } else {
        res +=
          cnt > 1 ? cnt.toString().length + keyword.length : keyword.length;
        cnt = 1;
        keyword = str;
      }
    }
    res += cnt > 1 ? cnt.toString().length + keyword.length : keyword.length;
    answer = answer > res ? res : answer;
  }
  return answer;
}
