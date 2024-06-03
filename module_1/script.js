// Déclaration de variables
let sportJo = "Break Dance"
let sportJo2 = "Athlétisme"

let yearJo = "2024"

let cities = ['Paris', "Lille", "Bayonne, Nantes"]

console.log(typeof sportJo)
console.log(yearJo)
console.log(cities)

// Structures de code
for (let city of cities) {
    console.log(city)
}

let date = new Date()

if(date.getFullYear() === yearJo){
    console.log("C'est cette année les JO")
}
else{
    console.log("C'est pas cette année les JO")
}

//Fonctions
(function getSport(index){
    const sports =  [
        "Beak Dance",
        "Escalade",
        "Flag Football",
        "Skate"
    ]
    console.log(sports[index])
})(1)

//Fonction anonyme
const getSport2 = function (index){
    const sports =  [
        "Beak Dance",
        "Escalade",
        "Flag Football",
        "Skate"
    ]
    console.log(sports[index])
}
getSport2(2)

//Fonction flechée
const getSport3 = (index) => {
    const sports =  [
        "Beak Dance",
        "Escalade",
        "Flag Football",
        "Skate"
    ]
    console.log(sports[index])
}
getSport3(3)
