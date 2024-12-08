const strings = ['a','b','c','d']; //4*4 = 16 bytes of storage

console.log(strings[3]); 

strings.push('e');  //o(1)
strings.pop(); //O(1)
strings.pop();
//unshift   - add to beginning of the array.
strings.unshift('x'); //o(n)      [ 'x', 'a', 'b', 'c' ]


//splice  -- add element to 2nd index and shift the index
strings.splice(2,0,'alien');   //[ 'x', 'a', 'alien', 'b', 'c' ]     O(n/2)- iterate through half of the arrays.

strings.shift(); //removes the first element - [ 'a', 'alien', 'b', 'c' ]

console.log(strings.at(2)); // display elelemtn at index 2. - 'b'

console.log(strings.indexOf('c'))// gives the index of element 'c'

console.log(strings.includes(3))//false

console.log(strings.reverse());  //reverses the strings and store in the strings. [ 'c', 'b', 'alien', 'a' ]

strings.sort(); // sorts the element in accending order [ 'a', 'alien', 'b', 'c' ]
console.log(strings);

//higher order array functions:
//map:

const numbers = ['1','2','3','4'] // strings, not numbers .
const changed = numbers.map((num) => num + 2 ); //map does not alter the orginal array. so numbers array remains unchanged. 

console.log(numbers); // [ '1', '2', '3', '4' ]
console.log(changed); // the result of map opertation is stored in 'changed' array - [ '12', '22', '32', '42' ]

//to perform arithmetic opration:

const result = numbers.map((num) => Number(num)+2)//type convert the string to number to perform arithemetic operations.
console.log(result); //  [ 3, 4, 5, 6 ]

const newArray = numbers.concat('6','7'); // it is used to merge two or more arrays. it does not modify the original array(numbers). So the new array is stored in new variable.
console.log(numbers); //[ '1', '2', '3', '4' ]
console.log(newArray); //[ '1', '2', '3', '4', '6', '7' ]

//filter:

const result1 = numbers.filter((num) => num > 2); // filter did not change the original array.
console.log(result1);  //[ '3', '4' ]

//every: this method tests whether all elements in an array pass the test implememted by the provided function. it returns true or false.

const result2 = numbers.every((num) => num > 0);
console.log(result2); //true

//some: 

/*Falsy values in JavaScript:
1.False
2.0 (zero)
3.-0 (negative 0)
4. 0n (BigInt zero)
5. ""  empty string
6. null 
7. undefined
8. NaN (Not a Number)
*/

/* Truthy values in JavaScript:
All values except falsy are truthy values.
1. Non-zero numbers:
    1,-1,42,3,14,Infinity, - Infinity
2. Non-empty strings:
    "Hello", "0", "false" ," " (a string with space)
3. Objects:
   {}, [] (empty object or an empty array are both truthy.)
   if({}) // true
   if([]) // true
4.Functions:
   function () {} (any function is truthy)
5. Dates:
    new Date() (any Date object is truthy.)
6. Non zero BigInt.
7. True Boolean values
    true
*/

