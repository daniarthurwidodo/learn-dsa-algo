def two_sum_bruteforce(nums, target):
    n = len(nums)
    for i in range(n):
        for j in range(i + 1, n):
            if nums[i] + nums[j] == target:
                return [i, j]  # Return the indices of the two numbers
    return []  # Return empty if no solution is found

# Example Usage:
nums = [2, 7, 11, 15]
target = 9
print(two_sum_bruteforce(nums, target))  # Output: [0, 1]
