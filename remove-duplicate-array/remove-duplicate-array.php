<?php

// Method 1: Using array_unique
function removeDuplicatesUsingArrayUnique($arr) {
    return array_values(array_unique($arr));
}

// Method 2: Using array_keys with array_count_values
function removeDuplicatesUsingCountValues($arr) {
    return array_keys(array_count_values($arr));
}

// Method 3: Using associative array
function removeDuplicatesUsingAssociative($arr) {
    return array_values(array_flip(array_flip($arr)));
}

// Example usage:
$array = [1, 2, 3, 3, 4, 4, 5, 5, 6];
echo "Original array: " . implode(", ", $array) . "\n";
echo "Using array_unique: " . implode(", ", removeDuplicatesUsingArrayUnique($array)) . "\n";
echo "Using array_count_values: " . implode(", ", removeDuplicatesUsingCountValues($array)) . "\n";
echo "Using associative array: " . implode(", ", removeDuplicatesUsingAssociative($array)) . "\n";