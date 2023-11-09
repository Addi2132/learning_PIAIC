function showMagicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Function to make magicians great
function makeGreat(magicians: string[]): string[] {
    return magicians.map(magician => `${magician} the Great`);
}

// magicians names
const magicianNames: string[] = ['Snape', 'Harry Potter', 'David Copperfield', 'Dumbledore'];

// modified list
const greatMagicians = makeGreat(magicianNames);
showMagicians(greatMagicians);