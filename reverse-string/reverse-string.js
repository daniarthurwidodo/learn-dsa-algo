// Method 1: Using built-in methods
const reverseStringBuiltin = (str) => {
    return str.split('').reverse().join('');
};

// Method 2: Using a for loop
const reverseStringLoop = (str) => {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
};

// Method 3: Using reduce
const reverseStringReduce = (str) => {
    return str.split('').reduce((reversed, char) => char + reversed, '');
};

// Method 4: Using spread operator
const reverseStringSpread = (str) => {
    return [...str].reverse().join('');
};

// Example usage:
const string = "Hello World!";
console.log('Original string:', string);
console.log('Using built-in methods:', reverseStringBuiltin(string));
console.log('Using loop:', reverseStringLoop(string));
console.log('Using reduce:', reverseStringReduce(string));
console.log('Using spread:', reverseStringSpread(string));