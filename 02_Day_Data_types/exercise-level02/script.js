//Using console.log() print out the following statement: The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

console.log('There is no exercise better for the heart than reaching down and lifting people up.')

//Using console.log() print out the following quote by Mother Teresa: "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

let a = '10'
let b = 10
let toNumber = parseInt(a)
console.log(typeof toNumber == typeof b)

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

let c = parseFloat('9.8')
let d = 10
let roundToCeil = Math.ceil(c)
console.log(roundToCeil == d)

//Check if 'on' is found in both python and jargon

let firstString = 'python'
let secondString = 'jargon'

console.log(firstString.match('on'))
console.log(secondString.match('on'))

//I hope this course is not full of jargon. Check if jargon is in the sentence.

let sentence = 'I hope this course is not full of jargon.'
console.log(sentence.includes('jargon'))

//Generate a random number between 0 and 100 inclusively.

let random0To100 = Math.floor(Math.random() * 101)
console.log(random0To100)

//Generate a random number between 50 and 100 inclusively.

let randomNum = Math.floor(Math.random() * 51) + 50
console.log(randomNum)

//Generate a random number between 0 and 255 inclusively.

let randomNum2 = Math.floor(Math.random() * 256)
console.log(randomNum2)

//Access the 'JavaScript' string characters using a random number.

let string = 'JavaScript'
let random = Math.floor(Math.random() * string.length)
console.log(string[random])

//Use console.log() and escape characters to print the following pattern.
/* 
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
*/ 

console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125')

//Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

let sentence01 = 'You cannot end a sentence with because because because is a conjunction'

console.log(sentence01.indexOf('because'))
console.log(sentence01.lastIndexOf('because'))
console.log(sentence01.substr(31,23))