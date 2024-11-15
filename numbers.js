//2413. Smallest Even Multiple
// Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.

// Example 1:

// Input: n = 5
// Output: 10
// Explanation: The smallest multiple of both 5 and 2 is 10.
// Example 2:

// Input: n = 6
// Output: 6
// Explanation: The smallest multiple of both 6 and 2 is 6. Note that a number is a multiple of itself.

//step1:
// Hint 1
// A guaranteed way to find a multiple of 2 and n is to multiply them together. When is this the answer, and when is there a smaller answer?
// Hint 2
// There is a smaller answer when n is even.

var smallestEvenMultiple = function(n) {
        if(n%2 === 0){
            return n;
        }else{
            return 2*n;
        }
        
};
console.log(smallestEvenMultiple(5));
console.log(smallestEvenMultiple(6));
