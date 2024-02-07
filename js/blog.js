

const myMovie = new Themoviedb("/movie/popular");
myMovie.fetchThemoviedb().then((data) => {
    console.log(data);
    const movies = data.results;
    const moviesContainer = document.getElementById('movies');
    const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";
    movies.forEach((movie) => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card', 'col-md-4', 'col-sm-6', 'col-xs-12');
        movieCard.innerHTML = `
            <figure class="movieFigure">
                <div class="image">
                    <img src="${IMG_BASE_URL}${movie.poster_path}" alt="{movie.title}"/><i class="ion-ios-basketball-outline"></i>
                </div>
                <figcaption>
                    <h3>${movie.title}</h3>
                    <p>${movie.overview}</p>
                    <div class="votes">
                        <p>Votos</p>
                        ${movie.vote_average}
                    </div>
                    <a href="#" class="add-to-cart">Ver mas.</a>
                </figcaption>
            </figure>
        `;
        moviesContainer.appendChild(movieCard);

    });
});