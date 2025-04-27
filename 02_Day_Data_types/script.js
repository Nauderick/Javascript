// let space = ' '           // an empty space string
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// let country = 'Finland'
// let city = 'Helsinki'
// let language = 'JavaScript'
// let job = 'teacher'
// let quote = "The saying,'Seeing is Believing' is not correct in 2020."
// let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`

// let fullName = firstName + space + lastName; // concatenation, merging two string together.
// //console.log(fullName);

/*
\n: new line
\t: Tab, means 8 spaces
\\: Back slash
\': Single quote (')
\": Double quote (")
*/

/*
console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')
*/

/*
let string = '30 Days of JavaScript'
console.log(string.split())
console.log(string.split(' '))
console.log(string.split(''))
*/

//In JavaScript the Math Object provides a lots of methods to work with numbers.

/* 
const PI = Math.PI
console.log(PI)
console.log(Math.round(PI))
console.log(Math.round(9.87))
console.log(Math.floor(8.74))
console.log(Math.ceil(7.2))
console.log(Math.min(5,9,0,-8,6,2))
console.log(Math.max(5,9,0,-8,6,2))
*/


/*
const randomNumber = Math.random()
console.log(randomNumber)

const zeroToTen = Math.floor((randomNumber * 11))
console.log(zeroToTen)

console.log(Math.sqrt(16)) //square root

console.log(Math.pow(4,2))
*/

/* 
console.log(`The sum of 2 and 3 is 5`)

let a = 8
let b = 6

console.log(`The sum of ${a} and ${b} is ${a+b}`)
console.log(`${a} is greater than ${b}: ${a > b}`)
*/


/* 
let string = "Javascript"

console.log(string.length)

let firstLetter = string[0]
console.log(firstLetter)

let secondLetter = string[1]
console.log(secondLetter)

let thirdLetter = string[2]
console.log(thirdLetter)

let lastLetter = string[string.length - 1]
console.log(lastLetter)

console.log(string.toUpperCase())
console.log(string.toLowerCase())

console.log(string.substr(4,6))
console.log(string.substr(0,4))

console.log(string.substring(0,4))
console.log(string.substring(4,6)) // It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.

console.log(string.split()) //changes to an array
console.log(string.split('')) //changes to an array at each letter

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(countries.split(',')) //splits to an array at comma
*/

// let string = '   30 Days of JavaScript       ' 
// console.log(string)
// console.log(string.trim()) //Removes trailing space in the beginning or the end of a string.


// let string = "30 Days of JavaScript"

// console.log(string.includes('Days')) //true
// console.log(string.includes('days')) // false - it is case sensitive
// console.log(string.includes('of')) //true
// console.log(string.includes('Java')) //true
// console.log(string.includes('script')) //false - it is case sentitive

// let string = '30 Days of JavaScript'

// console.log(string.replace('JavaScript', 'Oblivion')) //takes as a parameter the old substring and a new substring.

// let string = '30 Days Of JavaScript'

// console.log(string.charAt(0)) //Takes index and it returns the value at that index
// console.log(string.charAt(3))

// let string = '30 Days Of JavaScript'

// console.log(string.charCodeAt(0)) //Takes index and it returns char code (ASCII number) of the value at that index
// console.log(string.charCodeAt(3))

// let lastIndex = string.length - 1
// console.log(string.charCodeAt(lastIndex))

// let string = '30 Days Of JavaScript'

// console.log(string.indexOf(30)) //Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1
// console.log(string.indexOf('Java'))
// console.log(string.indexOf('pt'))
// console.log(string.indexOf('of'))

// let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'

// //lastIndexOf(): Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1

// console.log(string.lastIndexOf('love'))       // 67
// console.log(string.lastIndexOf('you'))        // 63
// console.log(string.lastIndexOf('JavaScript')) // 38

// concat(): it takes many substrings and joins them.

// let string = '30'
// console.log(string.concat('Days', "Of", "JavaScript"))

// let country = "Noz'"
// console.log(country.concat("Dingard"))


// startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
//syntax
// string.startsWith(substring)
// let string = 'Love is the best to in this world'

// console.log(string.startsWith('Love'))   // true
// console.log(string.startsWith('love'))   // false
// console.log(string.startsWith('world'))  // false

// let country = 'Finland'

// console.log(country.startsWith('Fin'))   // true
// console.log(country.startsWith('fin'))   // false
// console.log(country.startsWith('land'))  //  false


// endsWith: it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).
// string.endsWith(substring)
// let string = 'Love is the most powerful feeling in the world'

// console.log(string.endsWith('world'))         // true
// console.log(string.endsWith('love'))          // false
// console.log(string.endsWith('in the world')) // true

// let country = 'Finland'

// console.log(country.endsWith('land'))         // true
// console.log(country.endsWith('fin'))          // false
// console.log(country.endsWith('Fin'))          //  false


// repeat(): it takes a number as argument and it returns the repeated version of the string.
// string.repeat(n)
// let string = 'love'
// console.log(string.repeat(10)) // lovelovelovelovelovelovelovelovelovelove

