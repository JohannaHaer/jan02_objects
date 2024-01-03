const singers = [
    { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
    { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
    { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
    { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
    { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
    { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
    { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
    { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
];


let mapName = singers.map((singerName) => singerName.name)
console.log(mapName);

let mapCountry = singers.map((singerCountry) => singerCountry.country)
console.log(mapCountry);

let mapStart = singers.map((singerStart) => singerStart.period_active.start)
console.log(mapStart);

let mapEnd = singers.map((singerEnd) => singerEnd.period_active.end)
console.log(mapEnd);

let mapGenre = singers.map((singerGenre) => singerGenre.genre)
console.log(mapGenre);


let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

document.querySelector('body').appendChild(table);

table.appendChild(thead);
table.appendChild(tbody);

let row_1 = document.createElement('tr')
let heading_1 = document.createElement('th')
heading_1.innerHTML = 'Name'
let heading_2 = document.createElement('th')
heading_2.innerHTML = 'Country'
let heading_3 = document.createElement('th')
heading_3.innerHTML = 'Period_active'
let heading_4 = document.createElement('th')
heading_4.innerHTML = 'Genre'



row_1.appendChild(heading_1)
row_1.appendChild(heading_2)
row_1.appendChild(heading_3)
row_1.appendChild(heading_4)
tbody.appendChild(row_1)


for (let i = 0; i < mapName.length; i++){
    let rowStart = document.createElement('tr')
    rowStart.innerHTML = `<th>${mapName[i]}</th> <th>${mapCountry[i]}</th> <th>${mapStart[i]} - ${mapEnd[i]}</th> <th>${mapGenre[i]}</th>`
    tbody.appendChild(rowStart)
}
