// 136. Single Number
// Easy
// Topics
// Companies
// Hint
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

var singleNumber = function(nums) {
    const countMap = new Map(); // Use Map to store counts

    // Count occurrences of each number
    nums.map(num => {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    });

    // Find the number that occurs only once using Map's forEach
    let result;
    countMap.forEach((count, num) => {
        if (count === 1) {
            result = num; // Set the result if the count is 1
        }
    });

    return result;
};

console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));
console.log(singleNumber([1]));

 