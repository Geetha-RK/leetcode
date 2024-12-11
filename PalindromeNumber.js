/*
9. Palindrome Number

Given an integer x, return true if x is a 
palindrome, and false otherwise.


Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
 */

// Solution:

var isPalindrome = function(x) {
    if(x<0){
        return false;
    }else{
        let reverseNbr =0;
        let originalNbr = x;
        while(x!==0){
            let lastDigit = x%10;
            reverseNbr = reverseNbr * 10 + lastDigit;
            x = Math.floor(x /10); //removes the last digit from the x
            console.log(x);
            console.log(reverseNbr);
        }
        if(reverseNbr === originalNbr){
            return true;
        }else{
            return false;
        }
    }
};

console.log(isPalindrome(121));  //true
console.log(isPalindrome(-121)); //false
console.log(isPalindrome(0)); //true


// Solution2:

function isPalindrome1(x) {
    let temp = x
    let store = 0

    while ( temp >= 1){
        let value = temp % 10
        store = (store*10) + value 
        temp = Math.floor(temp / 10)
    }

    return x === store
};

console.log(isPalindrome1(121));  //true
console.log(isPalindrome1(-121)); //false
console.log(isPalindrome1(0)); //true

