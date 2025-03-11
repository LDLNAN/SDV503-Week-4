//const firstName = 'Lucas'
// const lastName = 'Donald'
// const wantDeath = true
// Camel case when naming variables
//Invalid --
// first-name
// 1_num
// num_#_1
// 
const classCode = 'SDV503'

// Declaring different variables of different data types

let firstName
let lastName
let student
let country
let age
// FIXME Just testing ;p
[firstName, lastName, student, country, age] = ["Lucas", "Donald", true, "New Zealand", 23]

let [firstName2, lastName2, student2, country2, age2] = 
[
    "Lucas", 
    "Donald", 
    true, 
    "New Zealand",
    23
]

let myAge = 23, yourAge = "Old"

console.log("I am "+myAge+" years old.") 
console.log("You are "+yourAge+".")


/** TODO -
 * SECTION - Primitive data types
 * Means primitive data types are immutable.
 * - Numbers = 7, 7.12
 * - Strings = "Hello. Strings contain text within """
 * - Boolean = true or false
 * - Null = Empty value or no value
 * - undefined = Declared variable without a value
 * !SECTION
 * SECTION - Object reference
 * Means object references are mutable.
 * - Objects
 * - Functions = doSomething(withThisValue, withAnotherValue)
 * - Arrays = let nums = [1,2,3,...]
 *            nums[2] = 40
 *            console.log(nums)
 * !SECTION
 * */ 
let words = []
words[0] = "Hello"
words[1] ="world",
words[2] = "my",
words[3] = "name",
words[4] = "is",
words[5] = "Jeffery",
words[6] = "Pototato"
let sayThis = true
if (sayThis = true)
[
    console.log(words[0],words[1]+",",words[2],words[3],words[4],words[5],words[6]+".")
]
