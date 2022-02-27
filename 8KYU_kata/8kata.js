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

// const testingFactorOfBase = (base, factor) => {
//     if(base % factor === 0){
//         return `True, ${factor} is a factor of ${base}`;
//     }else{
//         return ` False, ${factor} is not a factor of ${base}`;;
//     }
// }

 const testingFactorOfBase = (base, factor) => {
     return base % factor === 0;
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
// const reverseSequence = (n) => {
//     const arrayOfSequence = [];
//     for(let el = 1; el <= n; el++){
//         arrayOfSequence.push(el)
//     }
//     return arrayOfSequence.reverse()
// }

// console.log(reverseSequence(15))

//this also
// const reverseSequence = n => {
//     return Array(n).fill(0).map((e, i) => n - i );
// }

// console.log(reverseSequence(5));

//this as well
// const reverseSeq = length => Array.from({length}, () => length--)




/*  3. 
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/


const findOutlier = integers => {
    const oddIntegers = [];
    const evenIntegers = [];
    for(let el of integers){
        if(el % 2 === 0){
            evenIntegers.push(el)
        } else if (el % -2 === 0){
            evenIntegers.push(el)
        } else if(el % 1 === 0){
            oddIntegers.push(el)
        }else{
            oddIntegers.push(el)
        }
    }
    if(oddIntegers.length > evenIntegers.length){
        return Number(evenIntegers);
    }else{
        return Number(oddIntegers);
    }
};

const outlierNumber = findOutlier([252, 4721, 101, 100, 4, 110, 2602, 6]);

console.log(`The outlier here is ${outlierNumber}`)


/*  4.
The Western Suburbs Croquet Club has two categories of membership, 
Senior and Open. They would like your help with an application form 
that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7.
 In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member.
 Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell: Open or Senior)
 stating whether the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

*/


// const westernSuburbs = (arrayPairOfHandicap) => {
//     const arrayofPairs = [];
//     for(let pair of arrayPairOfHandicap){
//         if(arrayPairOfHandicap[])
//     }
// }



