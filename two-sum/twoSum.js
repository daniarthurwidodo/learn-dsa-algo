// Problem Statement
// Given an array of integers nums and an integer target, return the indices of the two numbers that add up to target.

// Using Brute Force (O(n²) Time Complexity)
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

// Example Usage:
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
