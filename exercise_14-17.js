var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// exercise_14: Guest List
var originalGuestList = ['Faizan', 'Daiyal', 'Amish', 'Hamza'];
for (var _i = 0, originalGuestList_1 = originalGuestList; _i < originalGuestList_1.length; _i++) {
    var guest = originalGuestList_1[_i];
    console.log("Dear ".concat(guest, ",You are invited to dinner."));
}
// exercise_15: Changing Guest List
console.log("\nOh, Amish and Hamza can't make it.\n");
var updatedGuestList = __spreadArray(__spreadArray([], originalGuestList.slice(0, 2), true), ["Abbas", "Umar"], false);
for (var _a = 0, updatedGuestList_1 = updatedGuestList; _a < updatedGuestList_1.length; _a++) {
    var guest = updatedGuestList_1[_a];
    console.log("Dear ".concat(guest, ", You are invited to dinner."));
}
// More Guests (Exercise 16)
console.log("\nGood news! I found a bigger dinner table!\n");
updatedGuestList.push("Athar");
updatedGuestList.splice(Math.floor(updatedGuestList.length / 2), 0, "Huzaifa");
updatedGuestList.push("Ammar");
console.log("Additional Invitations:\n");
for (var _b = 0, updatedGuestList_2 = updatedGuestList; _b < updatedGuestList_2.length; _b++) {
    var guest = updatedGuestList_2[_b];
    console.log("Dear ".concat(guest, ", You are invited to dinner."));
}
// Shrinking Guest List (Exercise 17)
console.log("\nOh no! The table won't arrive on time!\n");
console.log("\nSorry, I can only invite two people.\n");
while (updatedGuestList.length > 2) {
    var removedGuest = updatedGuestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", we ca't invite you to dinner this time."));
}
console.log("\nRemaining Invitations:\n");
for (var _c = 0, updatedGuestList_3 = updatedGuestList; _c < updatedGuestList_3.length; _c++) {
    var remainingGuest = updatedGuestList_3[_c];
    console.log("Dear ".concat(remainingGuest, ", You are still invited to dinner."));
}
updatedGuestList.pop();
updatedGuestList.pop();
console.log("Final Guest List:", updatedGuestList);
