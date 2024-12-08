// 1768. Merge Strings Alternately

// You are given two strings word1 and word2. 
//Merge the strings by adding letters in alternating order, 
//starting with word1. If a string is longer than the other, 
//append the additional letters onto the end of the merged string.

// Return the merged string.


//Pseudocode:
//get the two words.
//split each work into array.
//

const mergeString = (w1,w2) => {
   let merged = "";
   let i=0; let j=0;

   while(i<w1.length || j<w2.length){
        if(i< w1.length){
            merged += w1[i];
            i++;
        }
        if(j<w2.length){
            merged +=w2[j];
            j++;
        }
   }
   return merged;

}
// console.log(mergeString("abc","pqr"));
//*********************************************** */
// For two strings s and t, we say "t divides s" if and 
//only if s = t + t + t + ... + t + t 
//(i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, 
//return the largest string x such that x divides both str1 and str2.

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""
 
const gcdOfStrings = (str1,str2) => {
    if(str1 + str2 !== str2 + str1){
       return ""; 
    }

    const gcd = (a,b) => {
        while (b !== 0){
            let temp = b;
            b = a%b;
            a = temp;
        }
        return a;
    }

    const gcdLength = gcd(str1.length,str2.length);

    return str1.slice(0,gcdLength);
}

// console.log(gcdOfStrings("ABCABC","ABC"))
// console.log(gcdOfStrings("LEET","CODE"))

//************************** */

// 1979. Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

//The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.
 //step1: find minimum and maximum number in one iteration.
 //step2: try all the numbers in range [1,min] and check the largest number which divides both the number.
var findGCD = function(nums) {
    //finding minimum and maximum number of the array:
    let min = Math.min(...nums);
    console.log(min);
    console.log(...nums);

    let max = Math.max(...nums);
    console.log(max);

    const gcd = (a,b) => {
        while(b !== 0) {
            let temp = b;
            b=a%b;
            a = temp;
        }
        return a;
    }
    return gcd(min,max);

};

// console.log(findGCD([2,5,6,9,10]));
//***************************************************************** */
// 151. Reverse Words in a String

// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:

// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

const reverseWords = (s) => {
    return s.trim()                   // Trim leading and trailing spaces
            .split(/\s+/)             // Split by one or more spaces
            .reverse()                // Reverse the array of words
            .join(' ');               // Join words with a single space
}
console.log(reverseWords("the sky is blue"));
console.log(reverseWords(" Hello World "));
console.log(reverseWords("a good   example"));

//Create a function that reverse a string
//'Hi My name is Geetha' => 'ahteeG si eman yM iH'

const reverseSentence = (str) => {
    //check input:
    if(!str || str.length <2 || typeof str !== 'string'){
        return false;
    }
    //split() - converts a string into array of string.
    //toString() - convert the array back into to the string.
    // join() - convert the array back into the string.

    const reverse =  str.split(" ");// [ 'Hi', 'My', 'name', 'is', 'Geetha' ]
    const reverseWords = reverse.map((word) => word.split('').reverse().join('')); //[ 'iH', 'yM', 'eman', 'si', 'ahteeG' ]
    console.log(reverseWords);

    console.log(reverseWords.join(' ')); //iH yM eman si ahteeG
}
console.log(reverseSentence("Hi My name is Geetha"));


