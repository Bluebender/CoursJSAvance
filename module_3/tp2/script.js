async function takeALotOfTime(index){

    let i = 0
    while (i < 2_000_000_000) {
        i++
    }
    console.log(`Fin du traitement ${index}`)
}

const getAnimal = async (index) => {
    const aAnimals = {
        1: "chat",
        2: "Girafe",
        3: "Baleine",
        4: "chien",
        5: "singe"
    }
    takeALotOfTime(index)
    return (aAnimals[index])
}

const zoo = async () => {
    const cat = await getAnimal(1)
    const giraffe = await getAnimal(2)

    return [cat, giraffe]
}

const zoo2 = async () => {
    const cat = getAnimal(3)
    const giraffe = getAnimal(4)

    return await Promise.all([cat, giraffe])
}


console.log("début du programme")

zoo().then(data => console.log(data))
zoo2().then(data => console.log(data))

console.log("fin du programme")
