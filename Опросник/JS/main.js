const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDb.movies[a] = b;
    } else {
        i--;
    }

}

if (personalMovieDb.count < 10) {
    console.log("Просмотрено довольно мало ффильмов");
} else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDb.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDb);