
//735. Asteroid Collision

// We are given an array asteroids of integers representing asteroids in a row.

// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

 

// Example 1:

// Input: asteroids = [5,10,-5]
// Output: [5,10]
// Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
// Example 2:

// Input: asteroids = [8,-8]
// Output: []
// Explanation: The 8 and -8 collide exploding each other.
// Example 3:

// Input: asteroids = [10,2,-5]
// Output: [10]
// Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.

/*
Pseudo code:
1. initialize a stack: res = [], 
2. for loop for asteroids array, if res array is empty, then push the current asteroids array item into 
   the res array; if res array is not empty, then compare the current asteoids array item value with the last 
   res array item value;
3. Comparison:
   1).push the current astoids array item to the res array if they are both positive, or both negative, or the
   last element in the res is negative, but the current asteroid is positive
   2). Otherwise, if the last element in res is positive, and current asteroids items is negative, it means,
   they are going to collide:
       a). compare the absolute value of res(last element) and asteroids(current element),
           if res > asteroids, then continue, do nothing;
           if res < asteroids, then res.pop(), then I need to check whethere res has element, if has, then compare
           the new last res element with asteroids from step a), if res == [], then push asteroids to res.
           if res == astoroids, then res.pop()
4. next loop
              
5. return res;
   
*/

// Solution
var asteroidCollision = function(asteroids) {
    let res = [];
    
    for ( let i = 0; i < asteroids.length; i++) {

        while(res.length > 0 && res[res.length - 1] > 0 && asteroids[i] < 0) {
            let top = res[res.length -1];
            
            if(top + asteroids[i] > 0) {
                asteroids[i] = 0;
                break;
            }
            if(top + asteroids[i] == 0) {
                res.pop();
                asteroids[i] = 0;
                break;
            }
            if(top + asteroids[i] < 0) {
                res.pop();
            }
        }
        
        if(asteroids[i] !== 0) {
            res.push(asteroids[i]);
        }

    }
    
    return res;
};

console.log(asteroidCollision([-4,-1,10,2,-1,8,-9,-6,5,2]));

//[-4, -1, 10, 5,2]