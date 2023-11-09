// exercise_14: Guest List
const originalGuestList = ['Faizan', 'Daiyal', 'Amish', 'Hamza'];

for (const guest of originalGuestList) {
    console.log(`Dear ${guest},You are invited to dinner.`);
}

// exercise_15: Changing Guest List
console.log("\nOh, Amish and Hamza can't make it.\n");
const updatedGuestList = [...originalGuestList.slice(0, 2), "Abbas", "Umar"];

for (const guest of updatedGuestList) {
    console.log(`Dear ${guest}, You are invited to dinner.`);
}

// More Guests (Exercise 16)
console.log("\nGood news! I found a bigger dinner table!\n");

updatedGuestList.push("Athar");

updatedGuestList.splice(Math.floor(updatedGuestList.length / 2), 0, "Huzaifa");

updatedGuestList.push("Ammar");

console.log("Additional Invitations:\n");
for (const guest of updatedGuestList) {
    console.log(`Dear ${guest}, You are invited to dinner.`);
}

// Shrinking Guest List Exercise 17

console.log("\nOh no! The table won't arrive on time!\n");

console.log("\nSorry, I can only invite two people.\n");

while (updatedGuestList.length > 2) {
    const removedGuest = updatedGuestList.pop();
    console.log(`Sorry, ${removedGuest}, we ca't invite you to dinner this time.`);
}

console.log("\nRemaining Invitations:\n");
for (const remainingGuest of updatedGuestList) {
    console.log(`Dear ${remainingGuest}, You are still invited to dinner.`);
}

updatedGuestList.pop();
updatedGuestList.pop();

console.log("Final Guest List:", updatedGuestList);

