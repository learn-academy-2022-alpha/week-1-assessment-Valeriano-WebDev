// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer: The array of colors would change to --> colors = ["indigo", "tangerine", "magenta", "lilac", "daffodil"]
// b) Verify and explain: My initial answer was incorrect. I confused .push() with the method unshift() which is the method
//that adds the element to the beginning of an array. I also forgot that both methods will simply return the length of the new array.
// I would need to console.log the array again to display all the updated values.

//References : https://www.w3schools.com/jsref/jsref_push.asp    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift


// --------------------1) What will this log?

const cohort = "Alpha 2022"
console.log(cohort.length)

// a) Your answer: This will log 10
// b) Verify and explain: My answer was correct. The reasoning for the answer 10 is because the .length property is returning the number of code units occupying in the string rather than the number of characters contained
//in it. This is why the space between Alpha and 2022 is included in the answer. According to MDN documentation strings can have a maximum length/space of 2**30 - 2 or the equivalent of about 1GB.
//Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: Will return "o"
// b) Verify and explain: By calling the variable and encapsulating the number 4 in brackets, you will log the letter at the 4th index. Indexing begins at 0 , therefore [4] will log the 5th letter which is o.
//Reference : https://github.com/learn-academy-2022-alpha/Syllabus/blob/main/javascript/intro.md

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: It will log "Ruby"
// b) Verify and explain: We begin with the array which contains 4 elements. We know that by adding the [] with a value right after the array , we would log whichever string is at that index. By setting our variable
//index to 1  we would be calling the string at the 1st index of the languages array or languages[1]. As mentioned in the previous problem, arrays are zero indexed . Therefore, the string at the 1st index would be Ruby.
// Additionally, if there were no value at that particular index, then the console.log would return "undefined".
//Reference : https://github.com/learn-academy-2022-alpha/Syllabus/blob/main/javascript/arrays.md


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: The output would return an error.
// b) Verify and explain: The .toUpperCase() method  can only return a single string value converted to uppercase letters. In order to return each element of the array, capitalized, you would need to utilize a loop to iterate
//through each element of the array. There are multiple ways to do this, one being utilizing the .map() method. We must be cognisant of the fact that the method does not inherently change the value of the string
//because Javascript strings are immutable.
//References : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
//            https://attacomsian.com/blog/javascript-array-lowercase-uppercase


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: Array, 3
// b) Verify and explain: I was a bit confused when first looking at the code block. My thoughts were that the output of  typeof dataTypes would return array, being that the  dataTypes variable is an array.
//I also thought by adding the .length it might return 3 , since there are 3 elements . If we were to breakdown the output into 2 separate logs ex: console.log(dataTypes.length) and
// console.log(typeof dataTypes) I would almost be correct. The first log would return object and the second would return 3. We need to look at the log as a singular output and break it down piece by piece
// We first take dataTypes.length which equals 3. By utilizing the typeof operator on  3 , we come to the correct output of the log which is  "number" (the data type of the operand).
//Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof


