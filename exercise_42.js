function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Function to make magicians great
function makeGreat(magicians) {
    return magicians.map(function (magician) { return "".concat(magician, " the Great"); });
}
// magicians names
var magicianNames = ['Snape', 'Harry Potter', 'David Copperfield', 'Dumbledore'];
// modified list
var greatMagicians = makeGreat(magicianNames);
showMagicians(greatMagicians);
