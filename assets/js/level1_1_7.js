let myMusic = [
    {
        artist: "The Beatles",
        title: "Abbey Road",
        release_year: 1969,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        artist: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_year: 1978,
        medium: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        artist: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_year: 1971,
        medium: ["CS", "LP", "Download"],
        gold: true
    },
    {
        artist: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_year: 1983,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];

console.log(myMusic);

myMusic.forEach((information) => {
    const containerDiv = document.createElement("div");
    
    const artistName = document.createElement("p")
    artistName.innerHTML = information.artist
    document.body.appendChild(artistName)

    const songTitle = document.createElement("p")
    songTitle.innerHTML = information.title
    document.body.appendChild(songTitle)

    const media = document.createElement("p")
    media.innerHTML = information.medium.join(", ")
    document.body.appendChild(media)

    document.body.appendChild(containerDiv)
})





