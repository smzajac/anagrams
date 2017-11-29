

let aResults = document.getElementById('results');

function buttonPress() {
let inputValue = document.getElementById('inputForm').value;
let breakUp = inputValue.split("");
let wordResults = [];

for (var i = 0; i < words.length; i++) {
    if(inputValue.length === words[i].length){
    let testWord = words[i].split('');
    // console.log(testWord);
    breakUp.sort();
    testWord.sort();
    let look1 = breakUp.join("");
    let look2 = testWord.join("");
    if(look1 == look2){
      wordResults.push(words[i]);
      // let theResult = words[i];
      }
    }
  }
  aResults.innerHTML = `Input: ${inputValue}
  <br/>
  Results: ${wordResults}

  ` ;
}



function buttonPress2(){
  let dictionary = {};
  let temp = [];
  let amountofMatches = [];
  let anagrams = {};
  let enteredPhrase = document.getElementById('inputForm').value;
  let sortedJoined = enteredPhrase.split('').sort().join("");
  let sortedPhrase = enteredPhrase.split('').sort();
  let sortedOrg = enteredPhrase.split('').sort();


  // removing the spaces from the inputed phrase array of letters
  for (var i = 0; i < sortedPhrase.length + 1; i++) {
    if (sortedPhrase[0] === " ") {
      sortedPhrase.splice(0, 1);
      sortedOrg.splice(0, 1);
    }
  }


  //creating the dictionary that will be used to get anagrams
  for (var i = 0; i < words.length; i++) {
    let word = words[i].split('').sort().join("");
    if (dictionary.hasOwnProperty(word)) {
      dictionary[word].push(words[i]);
    }else {
      dictionary[word] = [words[i]];
    }
    if(dictionary[word].length > 4){
      amountofMatches.push(dictionary[word]);
    }
  };

  // z creates an array of all the keys in the dictionary
  let keys = Object.keys(dictionary);

  for (var i = 0; i < keys.length; i++) {
        sortedPhrase = [];
        sortedPhrase = sortedPhrase.concat(sortedOrg);
        temp = [];
    let matchingLetters = 0

    //creates an array of the correct
    for (var j = 0; j < keys[i].length; j++) {

      for (var h = 0; h < sortedOrg.length; h++) {
        // console.log(keys[i][j], sortedOrg[h])
        if (keys[i][j] === sortedOrg[h]) {
          let similarKey = sortedOrg[h];
          let locationInInputedPhrase = sortedPhrase.indexOf(similarKey)

        if(locationInInputedPhrase != -1){
          sortedPhrase.splice(locationInInputedPhrase,1);
          matchingLetters += 1;
          // console.log(matchingLetters)
          break;
        }
        }
      }
    }

if (matchingLetters === keys[i].length){

  let checker = sortedPhrase.join("");
  temp = temp.concat(dictionary[keys[i]])

  for (var c = 0; c < keys.length; c++) {
    let word = keys[c];
    if (checker === word) {
      temp = temp.concat(dictionary[word]);
      console.log(temp)
    }
  }
  }
  }
};
