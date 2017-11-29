 // let temp = [];
// let results = [];
// let cleanedResults = [];
// let amount = 0;
//
//
// function findLonestWord(str) {
//   var longestWord = 0;
//   for (var i = 0; i < str.length; i++) {
//     if(str[i].length > longestWord){
//       longestWord = str[i].length;
//     }
//   }
//   return longestWord;
// }
//
// let x = 0;
// let pairs = [];
// let testy = [];
// let compare = [];
//
// for (var i = 0; i < findLonestWord(words); i++) {
//   pairs = [];
//   x += 1;
//
//   // testy.push({x});
//   for (var j = 0; j < words.length; j++) {
//     if(words[j].length === x){
//       let tester = words[j].split('').sort().join('')
//       pairs.push({word: words[j], compare: tester});
//     }
//   }
//   testy.push({pairs});
//
//
//   for (var j = 0; j < testy[i].pairs.length; j++) {
//     // let compare = testy[i].pairs[j].compare;
//     // let length = testy[i].pairs.length
//     let word1 = testy[i].pairs[j].compare;
//     temp = [];
//     amount = 0;
//     for (var l = 0 ; l < testy[i].pairs.length; l++) {
//       let word2 = testy[i].pairs[l].compare;
//
//       if (word1 === word2) {
//         amount += 1;
//         temp.push(testy[i].pairs[l].word)
//         if (amount > 4) {
//             results.push(temp);
//         }
//       }
//     }
//   }
// }
// results.sort()
//
// let final = Array.from(new Set(results));
//
// console.table(final);



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
  let enteredPhrase = document.getElementById('inputForm').value;
  let sortedJoined = enteredPhrase.split('').sort().join("");
  let sorted = enteredPhrase.split('').sort();
  let sortedOrg = enteredPhrase.split('').sort();
  // removing the spaces from the inputed phrase array of letters
  for (var i = 0; i < sorted.length + 1; i++) {
    if (sorted[0] === " ") {
      sorted.splice(0, 1);
      sortedOrg.splice(0, 1);
    }
  }

  //used to reset the sorted value through each loop


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

  let wordLength = '';

  for (var i = 0; i < keys.length; i++) {
    let compareWord = keys[i].split('');
    sorted = [];
    sorted = sorted.concat(sortedOrg);
    temp = [];


    for (var l = 0; l < compareWord.length; l++) {
      // let found = false;
      // wordLength = compareWord.length;
      for (var k = 0; k < sorted.length; k++) {
          if (compareWord[l] === sorted[k]) {
            sorted.splice(k, 1)
            // found = true;
            // wordLength -= 1;
          }
      }
      // if(!found){
      //   break;
      // }
    }

    if (wordLength === 0) {
      temp = temp.concat(dictionary[keys[i]]);
      console.log(temp)
}

    // temp = temp.concat(dictionary[keys[i]]);

    let checker = sorted.join("")

    // console.log(sorted)
    // console.log(sortedOrg)
    // console.log(checker)
    // console.log(sorted);
    for (var c = 0; c < keys.length; c++) {

      let word = keys[c];
      if(checker === word){
        // console.log("word ", word, "checker ", checker)
        temp = temp.concat(dictionary[word])
        sorted = [];
        // console.log(temp);
      }
    }

    if(sorted.length < 0){
      console.log(temp);
    }
  }



// console.log(temp)

// console.log(temp)
// console.log(sorted);



    aResults.innerHTML=`Entered Phrase: ${enteredPhrase}
    <br/>
    Results:${sorted}

    `;
};


// function buttonPress2(){
//   let dictionary = {};
//   let temp = [];
//   let amountofMatches = [];
//   let enteredPhrase = document.getElementById('inputForm').value;
//   let sortedJoined = enteredPhrase.split('').sort().join("");
//   let sorted = enteredPhrase.split('').sort();
//   let sortedOrg = enteredPhrase.split('').sort();
//   // removing the spaces from the inputed phrase array of letters
//   for (var i = 0; i < sorted.length + 1; i++) {
//     if (sorted[0] === " ") {
//       sorted.splice(0, 1);
//       sortedOrg.splice(0, 1);
//     }
//   }
//
//   //used to reset the sorted value through each loop
//
//
//   //creating the dictionary that will be used to get anagrams
//   for (var i = 0; i < words.length; i++) {
//     let word = words[i].split('').sort().join("");
//     if (dictionary.hasOwnProperty(word)) {
//       dictionary[word].push(words[i]);
//     }else {
//       dictionary[word] = [words[i]];
//     }
//     if(dictionary[word].length > 4){
//       amountofMatches.push(dictionary[word]);
//     }
//   };
//
//   // z creates an array of all the keys in the dictionary
//   let keys = Object.keys(dictionary);
//
//
//   for (var i = 0; i < 200; i++) {
//     let compareWord = keys[i].split('');
//     sorted = [];
//     sorted = sorted.concat(sortedOrg);
//     temp = [];
//     for (var l = 0; l < compareWord.length; l++) {
//       for (var k = 0; k < sorted.length; k++) {
//           if (compareWord[l] === sorted[k]) {
//             sorted.splice(k, 1)
//
//           }
//       }
//     }
//
//     let remainingLetters = sorted;
//     sorted = [];
//     sorted = sorted.concat(sortedOrg);
//
//     for (var w = 0; w < sorted.length; w++) {
//       for (var g = 0; g < compareWord.length; g++) {
//           if (sorted[w] === compareWord[g]) {
//             compareWord.splice(g, 1)
//           }
//       }
//     }
//
//     if (compareWord.length === 0) {
//         temp.push(keys[i]);
//     }
//
//
//     // temp.push(keys[i]);
//
//     let checker = remainingLetters.join("")
//
//     for (var c = 0; c < keys.length; c++) {
//
//       let word = keys[c];
//       if(checker === word){
//
//         temp = temp.concat(dictionary[word]);
//         remainingLetters = 0;
//       }
//     }
//
//     if(remainingLetters === 0){
//       console.log(temp);
//     }
//   }
//
//
//
//     aResults.innerHTML=`Entered Phrase: ${enteredPhrase}
//     <br/>
//     Results:${sorted}
//
//     `;
// };
