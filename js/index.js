
const myTv = new Themoviedb("/tv/popular");

const tvPopularData = myTv.fetchThemoviedb()
    .then((data) => {
        const movies = data.results;
        return movies;
    })
    .then((movies) => {
        tvPopular(movies);
        featurette(movies, 'featurette0', 'right', 4);
        featurette(movies, 'featurette1', 'left', 6);
        featurette(movies, 'featurette2', 'right', 7);
    });


const tvPopular = (data) => {
    const moviesFilter = data.slice(0, 3);
    const moviesContainer = document.getElementById('tvPopular');
    const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";
    moviesFilter.forEach((movie) => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card', 'col-md-4', 'col-sm-6', 'col-xs-12');
        movieCard.innerHTML = `
            <img class="bd-placeholder-img rounded-circle" width="140" height="140" src="${IMG_BASE_URL}${movie.poster_path}" alt="${movie.title}"/>
            <h2 class="fw-normal">${movie.name}</h2>
            <p class="card-text mb-auto">${movie.overview}</p>
            `;
        moviesContainer.appendChild(movieCard);

    });
};

const featurette = (data, idItem, diagram = 'right', position = 0) => {
    const moviesFilter = data[position];
    const moviesContainer = document.getElementById(idItem);
    const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";
    const movieCard = document.createElement('div');
    movieCard.classList.add('featurette', 'row');
    movieCard.innerHTML = '';
    switch (diagram) {
        case 'right':
            movieCard.innerHTML = `
            <div class="col-md-7">
                    <h2 class="featurette-heading fw-normal lh-1">
                        ${moviesFilter.name}
                    </h2>
                    <p class="lead">
                        ${moviesFilter.overview}
                    </p>
                </div>
                <div class="col-md-5">
                    <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="140" src="${IMG_BASE_URL}${moviesFilter.poster_path}" alt="${moviesFilter.title}"/>
                </div>
            `;
            break;
        case 'left':
            movieCard.innerHTML = `
            <div class="col-md-7 order-md-2">
                    <h2 class="featurette-heading fw-normal lh-1">
                        ${moviesFilter.name}
                    </h2>
                    <p class="lead">
                        ${moviesFilter.overview}
                    </p>
                </div>
                <div class="col-md-5 order-md-1">
                    <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="140" src="${IMG_BASE_URL}${moviesFilter.poster_path}" alt="${moviesFilter.title}"/>
                </div>
            `;
            break;

        default:
            break;
    }

    moviesContainer.appendChild(movieCard);

};
