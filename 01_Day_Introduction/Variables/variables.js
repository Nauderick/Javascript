/*

Variables are containers of data. Variables are used to store data in a memory location. When a variable is declared, a memory location is reserved. When a variable is assigned to a value (data), the memory space will be filled with that data. To declare a variable, we use var, let, or const keywords.

For a variable that changes at a different time, we use let. If the data does not change at all, we use const. For example, PI, country name, gravity do not change, and we can use const. We will not use var in this challenge and I don't recommend you to use it. It is error prone way of declaring variable it has lots of leak. We will talk more about var, let, and const in detail in other sections (scope). For now, the above explanation is enough.

A valid JavaScript variable name must follow the following rules:

A JavaScript variable name should not begin with a number.
A JavaScript variable name does not allow special characters except dollar sign and underscore.
A JavaScript variable name follows a camelCase convention.
A JavaScript variable name should not have space between words.

The following are examples of valid JavaScript variables.

firstName
lastName
country
city
capitalCity
age
isMarried

first_name
last_name
is_married
capital_city

num1
num_1
_num_1
$num1
year2020
year_2020

The first and second variables on the list follows the camelCase convention of declaring in JavaScript. In this material, we will use camelCase variables(camelWithOneHump). We use CamelCase(CamelWithTwoHump) to declare classes, we will discuss about classes and objects in other section.

Example of invalid variables:

  first-name
  1_num
  num_#_1

Let us declare variables with different data types. To declare a variable, we need to use let or const keyword before the variable name. Following the variable name, we write an equal sign (assignment operator), and a value(assigned data).

// Syntax
let nameOfVariable = value

*/

//The nameOfVriable is the name that stores different data of value. See below for detail examples.
//Examples of declared variables:
// Declaring different variables of different data types

let firstName = 'Nauderick' // first name of a person
let lastName = 'Noob' // last name of a person
let country = "Naz'Dingard" // country
let city = 'Hellspawn City' // capital city
let age = 678 // age in years
let isMarried = false

console.log(firstName, lastName, country, city, age, isMarried)

//Declaring variables with number values
let age1 = 100 // age in years
const gravity = 9.81 // earth gravity in m/s²
const boilingPoint = 100 // water boiling point, temperature in °C
const PI = 3.14 // geometrical constant

console.log(gravity, boilingPoint, PI)

// Variables can also be declaring in one line separated by comma, however I recommend to use a seperate line to make code more readble
let name = 'Asabeneh', job = 'teacher', live = 'Finland'
console.log(name, job, live)
