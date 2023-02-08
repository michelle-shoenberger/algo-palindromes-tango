/*
1. Input cleaning - change to string, remove whitespace or punctuation, and change to lowercase
2. Loop through half the indexes
3. Make counter - point to last index, decrement each loop
4. If at anytime the char in the loop and the counter do not match , return false
5. If it runs through return true

*/

exports.palindrome = function(word) {
  new_word = word.toString().replace(/[^\w]/g, "").toLowerCase();
  let counter = new_word.length - 1;
  for (let i=0; i<new_word.length; i++) {
    if (new_word[i] !== new_word[counter]) {
      return false
    }
    counter --
  }
  return true
};
