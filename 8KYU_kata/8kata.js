1.
/*
This function should test if the factor is a factor of base.
Return true if it is a factor or false if it is not.
About factors
Factors are numbers you can multiply together to get another number.
2 and 3 are factors of 6 because: 2 * 3 = 6
You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
You can use the mod operator (%) in most languages to check for a remainder
For example 2 is not a factor of 7 because: 7 % 2 = 1
Note: base is a non-negative number, factor is a positive number.
*/

const testingFactorOfBase = (base, factor) => {
    if(base % factor === 0){
        return `True, ${factor} is a factor of ${base}`;
    }else{
        return ` False, ${factor} is not a factor of ${base}`;;
    }
}
console.log(testingFactorOfBase(-6, 2))


/*2

Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]

*/
const reverseSequence = (n) => {
    const arrayOfSequence = [];
    for(let el = n; el >= 1; el--){
        arrayOfSequence.push(el)
    }
    return arrayOfSequence
}

console.log(reverseSequence(15))

//Also this can work
const reverseSequence = (n) => {
    const arrayOfSequence = [];
    for(let el = 1; el <= n; el++){
        arrayOfSequence.push(el)
    }
    return arrayOfSequence.reverse()
}

console.log(reverseSequence(15))

