const movie1: { title: string, director: string, year: number } = {
    title: "Spider-Man: Across the Spider-Verse",
    director: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
    year: 2023
};

console.log("Movie 1:");
console.log(`Title: ${movie1.title}`);
console.log(`Director: ${movie1.director}`);
// console.log(`Year: ${movie1.yar}\n`); error....

// The error is:
console.log("\nerror TS2551: Property 'yar' does not exist on type '{ title: string; director: string; year: number; }'. Did you mean 'year'?\n");

// The solution is:


console.log(`Year: ${movie1.year}\n`);