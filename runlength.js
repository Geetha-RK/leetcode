/* coderbyte solution 3
Run Length:
Have a function runlength(str) take the str parameter being passed and return compressed verstion
of the string using the Run length encoding algorithm. this algorithm works by taking the 
occurrence of each repeating character and outputing the number along with a single character of the 
repeating sequence. for example "wwwggopp" would return 3w2g1o2p. the string will not contain any numbers, punctuation or symbols.

example:
input:"aabbcde"
output:2a2b1c1d1e
*/

function RunLength(str){
    let result = "" //empty string to store the output.
    let count  = 1; //counter to keep track of the characters.

    for(let i=0;i<str.length;i++){
        if(str[i]===str[i+1]){ //if the current character is same as the next character, increment the counter.
            count++;
        }else{
            result +=count+str[i]; //result=2a;
            count=1;//reset the counter
        }
    }
    return result;
}

console.log(RunLength('aabbcde'));