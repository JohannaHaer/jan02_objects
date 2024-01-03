let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
];

// let array = []
// edelMetallPreise.forEach((metalle) => {
//     array.push(metalle.name)
//     console.log(metalle.name);
// })
// console.log(array)



let mapName = edelMetallPreise.map((metalle) => metalle.name)
console.log(mapName);




// let arrayPreisGramm = []
// edelMetallPreise.forEach((metalle) => {
//     arrayPreisGramm.push(metalle.preiseGramEuro)
// })
// console.log(arrayPreisGramm)



let mapPrice = edelMetallPreise.map((metalle) => metalle.preiseGramEuro)
console.log(mapPrice);


// let arrayVeraenderung = []
// edelMetallPreise.forEach((metalle) => {
//     arrayVeraenderung.push(metalle.veraenderung)
// })
// console.log(arrayVeraenderung)



let mapChanges = edelMetallPreise.map((metalle) => metalle.veraenderung)



const ueber50 = edelMetallPreise.filter((groeßer) => groeßer.preiseGramEuro > 50)
console.log(ueber50);






let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

document.querySelector('body').appendChild(table);

table.appendChild(thead);
table.appendChild(tbody);

let row_1 = document.createElement('tr')
let heading_1 = document.createElement('th')
heading_1.innerHTML = 'name'
let heading_2 = document.createElement('th')
heading_2.innerHTML = 'preiseGramEuro'
let heading_3 = document.createElement('th')
heading_3.innerHTML = 'veraenderung'


row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
tbody.appendChild(row_1);


for (let i = 0; i < mapName.length; i++){
    let rowStart = document.createElement('tr')
    rowStart.innerHTML = `<th>${mapName[i]}</th> <th>${mapPrice[i]}</th> <th>${mapChanges[i]}</th>`
    tbody.appendChild(rowStart)
}