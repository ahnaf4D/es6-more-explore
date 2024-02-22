const numbers = [4, 5, 2, 8, 10];
const output2 = numbers.map(n => n * 2);
console.log(output2);
const double2 = (n) => n * 2;
const output = numbers.map(double2);
// console.log(output);
function doubleIt(num) {
    return num * 2;
}
const result = numbers.map(doubleIt);
// const doubled = [];
// for(const num of numbers){
//     const double = num * 2;
//     doubled.push(double);
// }
// console.log(doubled);