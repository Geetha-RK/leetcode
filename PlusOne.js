//66. Plus One

/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.
*/

/*
Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
 
*/

// Pesudocode:
//1.arr.length-1 element needs to be incremented by 1.
//1. if the number is more than >10, place 0 in the ith element, increment i-1 lement by 1.

var plusOne = function(digits) {
    for(let i=digits.length-1;i>=0;i--){
        // console.log(digits[digits.length-1]);
        if(digits[i] != 9){
            digits[i]++;
            console.log(digits[i]);
            return digits;
        }
        digits[i]=0;
    }
    return [1,...digits];
};

console.log(plusOne([1,2,3]));
console.log(plusOne([4,3,2,1]));
console.log(plusOne([9]));

//solution 2:

var plusOne = function(digits) {
    // Convert the array of digits to a single number
    let number = BigInt(digits.join('')) + BigInt(1);
    // Convert the number back to an array of digits
    return Array.from(String(number), Number);
};


console.log(plusOne([1, 2, 3])); // Output: [1, 2, 4]
console.log(plusOne([4, 3, 2, 1])); // Output: [4, 3, 2, 2]
console.log(plusOne([9])); // Output: [1, 0]
console.log(plusOne([9, 9])); // Output: [1, 0, 0]
/*
Explanation:
Join and Convert: The digits array is joined into a string and converted into a BigInt, which allows for handling very large numbers without overflow.
Increment: We simply add 1 to the BigInt.
Convert Back: The BigInt is converted back to a string, and Array.from is used to create an array of digits.
*/