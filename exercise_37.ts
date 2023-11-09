function makeShirt(size: string = 'Large', message: string = 'data!'): void {
    console.log(`Size: ${size}, Message: ${message}`);
}

// Call the function with different combinations
makeShirt(); // Large shirt with default message
makeShirt('Medium'); // Medium shirt with default message
makeShirt('Small', 'Learn What Matters'); // Small shirt with a different message