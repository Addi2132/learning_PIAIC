let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
    let ordinalEndings: string;

    if (number === 1) {
        ordinalEndings = 'st';
    } else if (number === 2) {
        ordinalEndings = 'nd';
    } else if (number === 3) {
        ordinalEndings = 'rd';
    } else {
        ordinalEndings = 'th';
    }

    console.log(`${number}${ordinalEndings}`);
}