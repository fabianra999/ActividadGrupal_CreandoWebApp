class Themoviedb {
    constructor(path) {
        this.path = path;
    }

    async fetchThemoviedb() {
        const API = "https://api.themoviedb.org/3";
        const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

        try {
            const response = await fetch(API + this.path, {
                headers: {
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxM2I4Y2RjOWE1YzJjMDVhOWQ1MDEwY2IwNDliZGJjMyIsInN1YiI6IjY1Yjk2Yzk4OTBmY2EzMDE2MjA2NzI0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.19XQpsHln1L_nz9EnGZsbWot4oYBWydeBo3FJH3D6Fk",
                    "Content-Type": "application/json;charset=utf-8",
                },
            });
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.error('Error al obtener las películas:', error);
        }
    }
};
