//27. Remove Element
/*
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.

Example 1:

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).

Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
                            // It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.
*/

//Pseudocode:
/*
1.map through each element of the nums array.Assign a result array empty.
2.if the value matches with 'val' dont push it to result array, if dont match push it to result array.
3. return the length of the result array, 

*/

//Solution:
var removeElement = function(nums, val) {
    let result = [];
    nums.map((num) => num===val ? "" : result.push(num));
    console.log(result);
    return result.length;
    
};

console.log(removeElement([3,2,2,3],3))
console.log(removeElement([0,1,2,2,3,0,4,2],2))

//Solution 2:
var removeElement = function(nums, val) {
    let k = 0; // Pointer for the position of non-val elements

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]; // Place non-val element at index k
            k++; // Move the k pointer forward
        }
    }
    
    return k;
};

console.log(removeElement([3, 2, 2, 3], 3)); // Output: 2, modified nums: [2, 2, _, _]
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // Output: 5, modified nums: [0, 1, 3, 0, 4, _, _, _]

/*
Explanation:
Two Pointers: The variable k keeps track of where to place the next non-val element.
Iterate Over nums: As you iterate through the array:
If the current element is not equal to val, place it at the k index and increment k.
In-Place Modification: This approach modifies nums directly, ensuring that the first k elements contain all elements not equal to val.
Return Count: Finally, return the count k, which indicates how many elements remain.
*/
