
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

Movie.prototype.rating = 15
console.log(movie.rating)
movie.rating = 3

console.log(movie)
console.log(movie.rating)
console.log(movie2)
// console.table(movie)
// movie.title = 'Beetlejuice 22'
// console.log(movie.description())
// console.log(movie2.description())
// console.log(movie)
