

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


// P4
function buttonPress2(){
  let dictionary = {};
  let temp = [];
  let amountofMatches = [];
  let anagrams = {};
  let enteredPhrase = document.getElementById('inputForm').value;
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


//P5
function buttonPress3(){
  let dictionary = {};
  let temp = [];
  let amountofMatches = [];
  let enteredPhrase = document.getElementById('inputForm').value;
  let sortedPhrase = enteredPhrase.split('').sort();
  let sortedOrg = enteredPhrase.split('').sort();
  let sortedOrgJoined = enteredPhrase.toLowerCase().split('').sort().join("").trim();
  let matchesHolder = {};
  let threeAnagramHolder = [];


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

    //nested loop comparing each letter of each item in the array to the input phrase
    for (var j = 0; j < keys[i].length; j++) {
      for (var h = 0; h < sortedOrg.length; h++) {

        //sees if the letters are similar to eachother
        if (keys[i][j] === sortedOrg[h]) {
          let similarKey = sortedOrg[h];
          let locationInInputedPhrase = sortedPhrase.indexOf(similarKey)

        if(locationInInputedPhrase != -1){
          sortedPhrase.splice(locationInInputedPhrase,1);
          matchingLetters += 1;
          break;
          }
        }
      }
    };

  if (matchingLetters === keys[i].length) {
    matchesHolder[keys[i]] = dictionary[keys[i]]
    }
  };

  let matchingKeys = Object.keys(matchesHolder);
  console.log(matchingKeys)

  for (var xi = 0; xi < matchingKeys.length; xi++) {
    let word1 = matchingKeys[xi];
    for (var xj = xi + 1; xj < matchingKeys.length; xj++) {
      let word2 = matchingKeys[xj]
      for (var xk = xj + 1; xk < matchingKeys.length; xk++) {
        let word3 = matchingKeys[xk];

      let matchingPhrase = word1 + word2 + word3;

      if (matchingPhrase.length === sortedOrg.length) {

        let compare = matchingPhrase.split('').sort().join("");
          if (compare === sortedOrgJoined) {
            threeAnagramHolder.push(`${dictionary[word1]} + ${dictionary[word2]} + ${dictionary[word3]}`);
          }
      }
      }
    }
  }


  // for (var z = 0; z < matchesKeys.length; z++) {
  //   console.log("ping")
  //   let firstWord = matchesKeys[i];
  //   sortedPhrase = [];
  //   sortedPhrase = sortedPhrase.concat(sortedOrg);
  //   temp = [];
  //   matchingWords = 0;
  //   matchingLetters = 0;
  //
  //     for (var j = 0; j < matchesKeys[j].length; j++) {
  //       let secondWord = matchesKeys[j];
  //       for (var k = 0; k < matchesKeys.length; k++) {
  //         let thirdWord = matchesKeys[k];
  //
  //         for (var g = 0; g < matchesKeys.length; g++) {
  //           for (var h = 0; h < sortedOrg.length; h++) {
  //             console.log(firstWord[g])
  //               if (firstWord[g] === sortedOrg[h]) {
  //                   let similarKey = sortedOrg[h];
  //                   let locationInInputedPhrase = sortedPhrase.indexOf(similarKey)
  //               }
  //
  //               if(locationInInputedPhrase != -1){
  //                 sortedPhrase.splice(locationInInputedPhrase,1);
  //                 matchingLetters +=1;
  //
  //                 break;
  //               }
  //           }
  //         }
  //
  //       for (var y = 0; y < secondWord.length; y++) {
  //         for (var x = 0; x < sortedOrg.length; x++) {
  //           if (secondWord[y] === sortedOrg[x]) {
  //               let similarKey = sortedOrg[x];
  //               let locationInInputedPhrase = sortedPhrase.indexOf(similarKey)
  //           }
  //
  //           if(locationInInputedPhrase != -1){
  //             sortedPhrase.splice(locationInInputedPhrase,1);
  //             matchingLetters +=1;
  //
  //             break;
  //           }
  //         }
  //       }
  //
  //       }
  //     }
  // }
  console.log(sortedOrgJoined)
  console.log(matchesHolder)
  console.log(threeAnagramHolder);
};
