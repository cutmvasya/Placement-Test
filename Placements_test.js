/**1. Write a function that concatenates two lists. 
 * [a,b,c], [1,2,3] → [a,b,c,1,2,3]
*/
const huruf = ["a", "b", "c"];
const number = [1, 2, 3];
const merge = huruf.concat(number);

console.log(merge);

function combine(huruf, number){
    return huruf.concat(number)
}
console.log(combine(["a", "b", "c"], [1, 2, 3]));

/**
 *  2. Write a function that combines two lists by alternatingly taking elements, 
 * e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/

const combineList = ([x, ...Xrest], y = []) => {
    return x === undefined ? y : [x, ...combineList(y, Xrest)]
  };

  console.log(combineList(["a", "b", "c", "d", "e", "f"], [1, 2, 3]))
console.log(combineList([a,b,c], [1,2,3]));


/**
 * 3. Write a function that merges two sorted lists into a new sorted list. 
 * [1,4,6],[2,3,5] → [1,2,3,4,5,6]. You can do this quicker than concatenating them followed by a sort.
*/

function merges (num1, num2){
    return [...num1, ...num2].sort('');
}
 console.log(merges([1,4,6], [2,3,5]));


/**
 * 4. Write function that translates a text to Pig Latin and back. 
 * English is translated to Pig Latin by taking the first letter of every word, 
 * moving it to the end of the word and adding 'ay'. 
 * "The quick brown fox" becomes "Hetay uickqay rownbay oxfay"
*/

const pigLatin = (str) => {
    const word = str.split(" ");

    const reverseWord = word.map((val) => val.slice(1, 
    val.length) + val.charAt(0).toLowerCase() + "ay" );

    const titleCase = reverseWord.join(" ");

    return titleCase.charAt(0).toUpperCase() + titleCase.slice(1, titleCase.length);
};

console.log(pigLatin("The quick brown fox"));
