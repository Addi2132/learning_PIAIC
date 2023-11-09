const movie1: { title: string, director: string, year: number } = {
    title: "Spider-Man: Across the Spider-Verse",
    director: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
    year: 2023
};

const movie2: { title: string, director: string, year: number } = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010
};

const movie3: { title: string, director: string, year: number } = {
    title: "Avengers: Endgame",
    director: "Anthony Russo Joe Russo",
    year: 2019 
};

// Print information about each movie.
console.log("My Favorite Movies:\n");

console.log("Movie 1:");
console.log(`Title: ${movie1.title}`);
console.log(`Director: ${movie1.director}`);
console.log(`Year: ${movie1.year}\n`);

console.log("Movie 2:");
console.log(`Title: ${movie2.title}`);
console.log(`Director: ${movie2.director}`);
console.log(`Year: ${movie2.year}\n`);

console.log("Movie 3:");
console.log(`Title: ${movie3.title}`);
console.log(`Director: ${movie3.director}`);
console.log(`Year: ${movie3.year}\n`);