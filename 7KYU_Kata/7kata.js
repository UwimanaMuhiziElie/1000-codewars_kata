/* 
1.
Given an input of an array of digits, return the array with each digit incremented by 1, the second digit by2, etc.
make sure to start counting your positions from 1(and not 0).
your result can only contain single digit number, only the last digit of the number should be returned.

NOTES:
    . return an empty array if your array is empty.
    .Array will only contain numbers so don't worry about checking that.

*/
//--------------1. display element of the array incremented by their indices----------

const incrementer = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayFunction = (arr) => {
    let arrResult = [];
    for(digit of arr){
        arrResult.push((arr.indexOf(digit) + 1 ) + digit);
    }
    return arrResult;
}
const myDigits = incrementer(ArrDigits);

console.log(myDigits)
//-------------2. check the output of the first part---------------


const descendingOrder = (n) => {
    const ArrOrder = parseInt(String(n).split("").sort().reverse().join(""));
    return ArrOrder;
}
console.log(descendingOrder(87094371));





3.
/* 
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd" accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy" 
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

*/


//1. create a function that you pass a string
//2. loop throught the string and split it 
//2.create another 


// const accum = (stringAlpha) => {
//     stringAlpha.split("").forEach(el =>{
//         console.log(`${el.toUpperCase().repeat(el.indexOf(el + 1))} - ${el.indexOf(el)} `)
//     });
// }
// console.log(accum("abds"));


// const mea = ["a", "b", "c", "g"];
// const answers = mea.forEach(el => {
//     el.repeat(mea[el] + 1)
// });

// console.log(answers)






























