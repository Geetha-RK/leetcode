/*
Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

*/

//Solution:

var isValid = function(s) {
    let stack = [];
    s.forEach(element => {
        if(element === "(" || element === "[" || element ==="{"){
            stack.push(element);
        }
    });
};

console.log(isValid("(]"));//false
console.log(isValid("[]"));//true
console.log(isValid("()[]{}"));//true
console.log(isValid("()"));//true



