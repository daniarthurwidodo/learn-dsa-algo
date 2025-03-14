// Method 1: Using Set
const removeDuplicatesUsingSet = (arr) => {
    return [...new Set(arr)];
};

// Method 2: Using filter
const removeDuplicatesUsingFilter = (arr) => {
    return arr.filter((item, index) => arr.indexOf(item) === index);
};

// Method 3: Using reduce
const removeDuplicatesUsingReduce = (arr) => {
    return arr.reduce((unique, item) => {
        return unique.includes(item) ? unique : [...unique, item];
    }, []);
};

// Example usage:
const array = [1, 2, 3, 3, 4, 4, 5, 5, 6];
console.log('Original array:', array);
console.log('Using Set:', removeDuplicatesUsingSet(array));
console.log('Using Filter:', removeDuplicatesUsingFilter(array));
console.log('Using Reduce:', removeDuplicatesUsingReduce(array));