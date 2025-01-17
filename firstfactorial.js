/*CoderByte solution 2
Have the function first factorial (num) take the num paramer being passed and 
return the factorial of it.for example if num = 4,then your programshould return(4*3*2*1)=24.
for the test cases, the rache will be between 1 and 18 and the input will always be an integer.
example
input:4
otput:24

input :8
output:40320
*/
//Solution:

function FirstFactorial(num){
    if(num===0 || num===1){
        return 1;
    }else{
        return num*FirstFactorial(num-1);
    }
}
console.log(FirstFactorial(4));
console.log(FirstFactorial(8));
