
function Movie(title, year, director) {
    this.title = title
    this.year = year
    this.director = director
    this.description = function () {
        return `${this.title} sorti en ${this.year} et réalisé par ${this.director}`;
    }
}

const movie = new Movie('Titanic', 1995, 'James Cameron')
const movie2 = new Movie('Avatar', 2009, 'James Cameron')

console.log(movie)
console.log(movie2)
console.table(movie)
movie.title = 'Beetlejuice 22'
movie.ratiing = 3
console.log(movie.description())
console.log(movie2.description())
console.log(movie)
