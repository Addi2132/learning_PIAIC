var car = 'mazda';
var age = 25;
var engine = '2JZ';
var fruits = ['apple', 'banana', 'orange'];
var country = 'Pakistan';
// Conditional tests for true 
console.log("Is car == 'mazda'? I predict True.");
console.log(car == 'mazda');
console.log("Is age >= 18? I predict True.");
console.log(age >= 18);
console.log("Is engine !== 'V8'? I predict True.");
console.log(engine !== 'V8');
console.log("Is country == 'Pakistan' or 'Canada'? I predict True.");
console.log(country == 'Pakistan' || country == 'Canada');
console.log("Is 'banana' in fruits? I predict True.");
console.log(fruits.indexOf('banana'));
console.log("age == 25? I predict True.");
console.log(age == 25);
// Conditional tests for false
console.log("\nIs car == 'toyota'? I predict False.");
console.log(car == 'toyota');
console.log("Is age < 18? I predict False.");
console.log(age < 18);
console.log("Is engine == 'V8'? I predict False.");
console.log(engine == 'V8');
console.log("Is 'grape' in fruits? I predict False.");
console.log(fruits.indexOf('grape'));
console.log("Is country == 'Pakistan' or 'Canada'? I predict True.");
console.log(country == 'USA' || country == 'Canada');
// Additional tests
console.log("\nAdditional Tests:");
// Equality and inequality with strings
console.log("Is 'apple' equal to 'orange'? I predict False.");
console.log(fruits[0] == fruits[2]);
// Tests using the lower case function
console.log("Is '2jz' in lower case equal to '2JZ'? I predict True.");
console.log(engine.toLowerCase() == '2jz');
// Numerical tests
console.log("Is age > 30? I predict False.");
console.log(age > 30);
console.log(age > 30);
// Tests using "and" and "or" operators
console.log("Is age >= 21 and country == 'Pakistan'? I predict False.");
console.log(age >= 21 && country == 'Pakistan');
console.log("Is age >= 21 or country == 'Pakistan'? I predict True.");
// Test whether an item is not in an array
console.log("Is 'grape' not in fruits? I predict True.");
console.log(!fruits.indexOf('grape'));
// Test whether a string is not in another string
console.log("Is 'mazda' not in car? I predict False.");
console.log(!car.indexOf('mazda'));
