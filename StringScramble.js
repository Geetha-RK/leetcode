/* Coderbyte 4
 have a function StringScramble (str1,str2) take both parameters 
 being passed and return the string true if a portion of str 1 characters can be rearranged to match str2,otherwise return 
 the string false. for example if the str1 is 'rkqodlw' and str 2 is 'world' the output should return true.punctuations 
 and symbols will not be entered with the parameters.
 input:cdore and str 2 : coder
 output: true

 input "h3llko" & str 2:"hello"
 output:false
*/
//Solution:

function StringScramble(str1,str2){
   for(let i = 0;i<str2.length;i++){
    let char = str2[i]; //get the current char in str 2
    let index = str1.indexOf(char); // find the index of the char in str 1.
    if(index === -1){ // if the char is cnot found, return false/
        return false;
    }
    //return the cahr from str1
    str1 = str1.substring(0,index) + str1.substring(index +1);  
   }
   // all characters in str2 were found in str 1, return true.
   return true;

}
console.log(StringScramble("h3llko","hello"))
console.log(StringScramble("cdore","coder"))
