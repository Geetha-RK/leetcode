// 643. Maximum Average Subarray I

// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.


// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000

//Solution:
var findMaxAverage = function(nums, k) {
    let sum = 0;
    let max = -Infinity
    let windowStart = 0;

    for(let windowEnd=0;windowEnd<nums.length;windowEnd++){
        sum+=nums[windowEnd];
        if(windowEnd-windowStart === k-1){
            let avg = sum/k;
            max =Math.max(max,avg);
            sum -= nums[windowStart];
            windowStart++;

        }
    }
    return max;
};

console.log(findMaxAverage([1,12,-5,-6,50,3],4));

// Solution2:

var findMaxAverage2 = function(nums, k) {
    // Initialize the sum of the first subarray of length k
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    // Initialize max as the sum of the first subarray
    let max = sum;

    // Slide the window from left to right, one element at a time
    for (let i = k; i < nums.length; i++) {
        // Slide the window: subtract the element that is left behind and add the new element
        sum += nums[i] - nums[i - k];
        
        // Update the max sum
        max = Math.max(max, sum);
    }

    // Return the maximum average (divide max sum by k)
    return max / k;
};

// Test cases
console.log(findMaxAverage2([1, 12, -5, -6, 50, 3], 4));  // Output: 12.75
console.log(findMaxAverage2([5], 1));  // Output: 5.0

//Sum of 4 consecutive numbers:
// Solution 4:
var findSum = function(nums, k){
    let sum = 0;
    let windowbegin = 0;

    let max = -Infinity;
    for(let windowEnd = 0; windowEnd < nums.length; windowEnd ++){
        sum += nums[windowEnd];

        if(windowEnd - windowbegin === k-1){
            max = Math.max(max, sum);
            sum-=nums[windowbegin];
            windowbegin++;
        }
    }
    return max;
}

console.log(findSum([2,4,5,1,0,9,3,4,5,8],4));

// Given an array of positive integers nums and a positive integer target, return the minimal length of a 
// subarray
//  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Solution 5: BruteForce

var minSubArrayLen = function(target, nums){
    let minLength = Infinity;
    for(let i=0;i<=nums.length-1;i++){
        let sum = 0;
        for(let j=i;j<=nums.length-1;j++){
            sum += nums[j];
            if(sum >= target){
                minLength = Math.min(minLength, j-i+1);
                break;
            }
        }
    }
    return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); //output 2
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1])); //output 0

//Better solution:
 var minSubArrayLen2 = function(target,nums){
    let sum=0;
    let min=Infinity;
    let windowLeft=0;
    for(let windowRight=0;windowRight<=nums.length-1;windowRight++){
        sum += nums[windowRight];

        while (sum >= target) {
            min = Math.min(min, windowRight - windowLeft + 1);  // Update the minimum length
            sum -= nums[windowLeft];  // Subtract the element going out of the window
            windowLeft++;  // Move the left pointer forward
        }
    }
    return min === Infinity ? 0 : min; 
 }

 console.log(minSubArrayLen2(7, [2, 3, 1, 2, 4, 3]));  // Output: 2
console.log(minSubArrayLen2(11, [1, 1, 1, 1, 1, 1]));  // Output: 0

//Incase to return the subarray:

var minSubArrayLen3 = function(target, nums) {
    let sum = 0;
    let minLength = Infinity;
    let windowLeft = 0;
    let result = [];

    for (let windowRight = 0; windowRight < nums.length; windowRight++) {
        sum += nums[windowRight];  // Expand the window by adding the current element

        // Shrink the window from the left as long as the sum is greater than or equal to the target
        while (sum >= target) {
            if (windowRight - windowLeft + 1 < minLength) {
                minLength = windowRight - windowLeft + 1;  // Update the minimum length
                result = nums.slice(windowLeft, windowRight + 1);  // Store the subarray
            }
            sum -= nums[windowLeft];  // Subtract the element going out of the window
            windowLeft++;  // Move the left pointer forward
        }
    }

    return result.length === 0 ? [] : result;  // If no valid subarray, return an empty array
};

// Example usage:
console.log(minSubArrayLen3(7, [2, 3, 1, 2, 4, 3]));  // Output: [4, 3]
console.log(minSubArrayLen3(11, [1, 1, 1, 1, 1, 1]));  // Output: [] (no valid subarray)


//Template for any sliding window problem:

function slidingWindow(nums, k) {
    let windowSum = 0;  // Or any other metric (e.g., max, min, count, etc.)
    let windowStart = 0;  // Left pointer of the window
    let result = 0;  // Store the result, which will depend on the problem

    // Loop through the array using the right pointer (windowEnd)
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        // Add the current element to the window (expand window)
        windowSum += nums[windowEnd];

        // If the window size is greater than or equal to 'k' (or any other condition)
        if (windowEnd - windowStart + 1 >= k) {
            // Update the result based on the problem requirement
            result = Math.max(result, windowSum); // Example for sum or max (adjust this line per the problem)

            // Slide the window (move the left pointer to shrink the window)
            windowSum -= nums[windowStart];  // Remove the element going out of the window
            windowStart++;  // Move the left pointer to the right
        }
    }

    return result;  // Return the result (e.g., max sum, min length, etc.)
}