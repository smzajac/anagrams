
let word = "least";

let breakUp = word.split("");

for (var i = 0; i < words.length; i++) {
    if(word.length === words[i].length){
    let testWord = words[i].split('');
    // console.log(testWord);
    breakUp.sort();
    testWord.sort();
    let look1 = breakUp.join("");
    let look2 = testWord.join("");
    if(look1 == look2){
      console.log(words[i]);
      }
    }
  }
