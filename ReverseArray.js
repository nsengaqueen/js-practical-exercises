// Write a function reverseLongestWord that takes a sentence as an argument
//  and returns the longest word in the sentence reversed and
//  with the first character capitalized.


function ReverseWord(sentence) {
  Newsentence = sentence.split(" ");

  let longestword = Newsentence[0];
  for (let i = 1; i < Newsentence.length; i++) {
    if (longestword.length < Newsentence[i].length) {
      longestword = Newsentence[i];
      longestword = longestword.split("").reverse().join("");
      longestword = longestword[0].toUpperCase() + longestword.slice(1);
    }
  }
  return longestword;
}
let sentence = "the question he sent wa ambigous ";
console.log(ReverseWord(sentence));



