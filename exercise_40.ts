function makeAlbum(artist: string, title: string, tracks?: number): Record<string, string | number> {
    const album: Record<string, string | number> = {
        artist: artist,
        title: title,
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Make three dictionaries representing diferent albums
const album1 = makeAlbum('Artist1', 'Album Title1', 12);
const album2 = makeAlbum('Artist2', 'Album Title2');
const album3 = makeAlbum('Artist3', 'Album Title3', 8);

console.log(album1);
console.log(album2);
console.log(album3);