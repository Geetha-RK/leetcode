/* CoderByte Solution 1 
Bracket Matcher:
((coder)(byte)) - if bracket matches output 1.
((coder)((byte))) - if brackets dont match output 0.
*/

//Solution:
function BracketMatcher(str) {
    const stack = []; //empty stack to keep track of open brackets

    for(let i=0;i<str.length; i++){
        if(str[i]==='('){
            stack.push(str[i]);
        }else if(str[i] === ')'){
            if(stack.length === 0){ // if there is no matching ( in stack, return 1.
                return 1;
            }else{
                stack.pop();
            }
        }
    }
    return stack.length === 0 ? 1:0;//if the stack is empty , all opening brackets have been matched to the closing bracket.

}

console.log(BracketMatcher('((coder)(byte))')) //output1
console.log(BracketMatcher('((coder)((byte))')) //output 0
