/* 2024.考试的最大困扰度 */

/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
  return Math.max(
    maxConsecutiveChar(answerKey, k, "T"),
    maxConsecutiveChar(answerKey, k, "F")
  );
};

const maxConsecutiveChar = (answerKey, k, ch) => {
  const n = answerKey.length; // 最大字符串长度
  let ans = 0;
  
  for (let left = 0, right = 0, sum = 0; right < n; right++) {

    sum += answerKey.charAt(right) !== ch ? 1 : 0; // 当前字符串中有多少个不是ch的字符
    while (sum > k) {
      sum -= answerKey[left] !== ch ? 1 : 0;      
      left++;
    }
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
};
