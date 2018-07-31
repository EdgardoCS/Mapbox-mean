var disc = [
    ['dance of death', 0, 11],
    ['brave new world', 12, 22]
];
var songs = [
    ['rainmaker', 1],
    ['face in the sand', 8],
    ['the wickerman', 13],
    ['out of the silent planet', 21]
];

console.log(disc);
console.log(songs);

for (i = 0; i < disc.length; i++) {
    for (j = 0; j < songs.length; j++) {
        //console.log(disc[i])
        //console.log(songs[j])
    }
}

for (h = 0; h < disc.length; h++) {
    for (i = disc[h][1]; i <= disc[h][2]; i++) {
        for (j = 0; j < songs.length; j++){
            if (songs[j][1] == i) {
                console.log(songs[j][0])
            }
        }
        console.log(i);
    }
}