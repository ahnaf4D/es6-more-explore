/**
 * 1. var let const
 * 2. Default parameter
 * 3. Template String
 * 4. arrow function
 * 5. destructuring and spread operator
 * 6. Object.keys, Object.values, Object.entries
 * 7. for of(array , string), for in (object) 
 * 
*/
const a = 56;
const numbers = [56, 7, 8];
const person = {
    name : 'Sakib Khan',
}
const massage = `Hi ${person.name} has a: ${a} access to ${numbers[2]}`;

const square = x => x * x;
const sum = (a, b) => a + b;

const {age , z , ...others} = {x : 2 , y : 5 , name : 'rokib' , age : 55};

const [first , second , ...remaining] = ['ram', 'sam','jodhu','modhu'];