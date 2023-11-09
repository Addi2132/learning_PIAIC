function makeAlbum(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Make three dictionaries representing diferent albums
var album1 = makeAlbum('Artist1', 'Album Title1', 12);
var album2 = makeAlbum('Artist2', 'Album Title2');
var album3 = makeAlbum('Artist3', 'Album Title3', 8);
console.log(album1);
console.log(album2);
console.log(album3);
