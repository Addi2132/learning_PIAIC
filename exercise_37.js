function makeShirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'data!'; }
    console.log("Size: ".concat(size, ", Message: ").concat(message));
}
// Call the function with different combinations
makeShirt(); // Large shirt with default message
makeShirt('Medium'); // Medium shirt with default message
makeShirt('Small', 'Learn What Matters'); // Small shirt with a different message
