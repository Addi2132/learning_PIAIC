function showMagicians(magicians: string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Function to make magicians great without modifying the original array
function makeGreat(magicians: string[]) {
    return magicians.map(magician => `${magician} the Great`);
}

const magiciannames = ['Snape', 'Harry Potter', 'David Copperfield', 'Dumbledore'];

const greatMagicians = makeGreat([...magiciannames]);

console.log("Original Magicians:");
showMagicians(magiciannames);

console.log("\nGreat Magicians:");
showMagicians(greatMagicians);