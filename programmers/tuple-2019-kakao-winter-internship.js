/*
 * https://programmers.co.kr/learn/courses/30/lessons/64065
 * Input/Output examples
 * s	                              result
 * "{{2},{2,1},{2,1,3},{2,1,3,4}}"	[2, 1, 3, 4]
 * "{{1,2,3},{2,1},{1,2,4,3},{2}}"	[2, 1, 3, 4]
 * "{{20,111},{111}}"	              [111, 20]
 * "{{123}}"	                      [123]
 * "{{4,2,3},{3},{2,3,4,1},{2,3}}"	[3, 2, 4, 1]
 */

// 1. My first code
function solution(s) {
  var answer = [];
  var dict = {};

  var sets = s
    .slice(2, s.length - 2)
    .split("},{")
    .sort((a, b) => a.length - b.length)
    .forEach((val) => {
      val.split(",").forEach((el) => {
        if (!dict[el]) {
          dict[el] = {};
          answer.push(parseInt(el));
        }
      });
    });
  return answer;
}

// 2. After refering
// A) Improving my answer with keeping dictionary
function solution(s) {
  var answer = [];
  var dict = {};

  var sets = s
    .slice(2, -2)
    .split("},{")
    .sort((a, b) => a.length - b.length)
    .forEach((val) => {
      val.split(",").forEach((el) => {
        if (!dict[el]) {
          dict[el] = {};
          answer.push(+el);
        }
      });
    });
  return answer;
}

// B)
/* Searched 1: object vs array lookuup performance
 * Answer: it depends on data size
 * Array is faster in small data. However, since object uses hash structure,
 * object is more efficient at searching huge amount of items.
 * In general, the indexOf is O(n) and hash is O(1).
 * Ref: https://stackoverflow.com/questions/32234733/javascript-what-lookup-is-faster-array-indexof-vs-object-hash
 *
 * Searched 2: array vs set adding/iterating operations
 * Answer: Array is a lot more faster in both 10k and 100k elements tests.
 * Ref: https://stackoverflow.com/questions/39007637/javascript-set-vs-array-performance#comment110600337_39007637
 *
 * Read: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 * Read: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 */

function solution(s) {
  s = s
    .slice(2, s.length - 2)
    .split("},{")
    .sort((a, b) => a.length - b.length);
  return Array.from(
    s.reduce((prev, curr) => {
      curr.split(",").forEach((n) => prev.add(n * 1));
      return prev;
    }, new Set())
  );
}
