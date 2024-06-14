class Question {
    enonce
    reponses = []
    reponseCorrecte

    constructor(enonce, reponses, reponseCorrecte) {
        this.enonce = enonce
        this.reponses = reponses
        this.reponseCorrecte = reponseCorrecte
    }

    afficher() {

        let div = document.createElement('div')
        let p = document.createElement('p')
        p.innerText = this.enonce
        div.append(p)

        let buttonDiv = document.createElement('div')
        for (let element of this.reponses) {
            let button = document.createElement('button')
            button.innerText = element
            buttonDiv.append(button)
        }

        div.append(buttonDiv)

    }
}
