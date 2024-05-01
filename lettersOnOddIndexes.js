function lettersOnOddIndexes(str) {
  let Nstr = str.replace(/[^a-zA-Z]/g, "");
  let word = "";

  for (i = 0; i < Nstr.length; i++)
    if (i % 2 !== 0) {
      word += Nstr[i];
    }
  return word;
}
let str = "Hello, World!";
console.log(lettersOnOddIndexes(str));
