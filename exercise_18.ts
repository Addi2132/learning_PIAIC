let placesToVisit: string[] = ["Tokyo", "Paris", "New York", "Sydney", "Rio de Janeiro"];

console.log("Original Order:", placesToVisit);

console.log("Alphabetical Order:", [...placesToVisit].sort());

console.log("Still in Original Order:", placesToVisit);

console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());

console.log("Still in Original Order:", placesToVisit);

placesToVisit = placesToVisit.reverse();

console.log("Reversed Order:", placesToVisit);

placesToVisit.reverse();

console.log("Back to Original Order:", placesToVisit);

placesToVisit.sort();

console.log("Sorted in Alphabetical Order:", placesToVisit);

placesToVisit.sort().reverse();

console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);


