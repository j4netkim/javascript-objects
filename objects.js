// var playlist = { 'Murder by Death': 'Brother', 'Scissor Sisters': 'Take Yo Mamma Out' };

// function updatePlaylist(playlist, artistName, songTitle) {
//     playlist[artistName] = songTitle;
// }

// function removeFromPlaylist(playlist, artistName) {
//     delete playlist[artistName];
// }

var playlist = { NF: 'Outcast' }

function updatePlaylist(obj, artist, song) {
    obj[artist] = song
    return obj
}
function removeFromPlaylist(obj, artist) {
    delete obj[artist]
    return obj
}