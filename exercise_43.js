var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Function to make magicians great without modifying the original array
function makeGreat(magicians) {
    return magicians.map(function (magician) { return "".concat(magician, " the Great"); });
}
var magiciannames = ['Snape', 'Harry Potter', 'David Copperfield', 'Dumbledore'];
var greatMagicians = makeGreat(__spreadArray([], magiciannames, true));
console.log("Original Magicians:");
showMagicians(magiciannames);
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
