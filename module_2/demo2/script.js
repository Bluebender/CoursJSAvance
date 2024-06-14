
const movie = {
    title : 'Beetlejuice 2',
    year : 2024,
    director : 'Tim Burton',
    description : function () {
        return `${this.title} sorit en ${this.year} et réalisé par ${this.director}`;
    }
}

console.log(movie)
console.table(movie)
movie.title = 'Beetlejuice 22'
movie.ratiing = 3
console.log(movie.description())
console.log(movie)
