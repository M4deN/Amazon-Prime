var main = document.querySelectorAll('.main .center')[0];

fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&languague=en-US&page=1')
.then(response=> response.json())
.then(data => {
    const centro = document.querySelector('.centro'); // Encontrar o elemento com a classe 'centro'

    data.results.map((i, j) => {

        if (j > 14)
            return;
        if (j == 0) {

            centro.innerHTML += `
           
            <div class="banner-principal" style="margin-top:10px;background-image:url('https://image.tmdb.org/t/p/original${i.backdrop_path}')"></div>
            `;
        } else {
            if (j == 1) {
                centro.innerHTML += `
                
                <div class="card-movie"><img src="https://image.tmdb.org/t/p/w300${i.poster_path}" /></div>
                `;
            } else {

                centro.innerHTML += `
                <div class="card-movie"><img src="https://image.tmdb.org/t/p/w300${i.poster_path}" /></div>
                `;
            }

        }

    })
})


fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&languague=en-US&page=2')
.then(response=> response.json())
.then(data => {
    const centro = document.querySelector('.centro'); // Encontrar o elemento com a classe 'centro'

    data.results.map((i, j) => {

        if (j > 14)
            return;
        if (j == 0) {

            centro.innerHTML += `
            <div class="banner-principal" style="margin-top:10px;background-image:url('https://image.tmdb.org/t/p/original${i.backdrop_path}')"></div>
            `;
        } else {
            if (j == 1) {
                centro.innerHTML += `
                <div class="card-movie"><img src="https://image.tmdb.org/t/p/w300${i.poster_path}" /></div>
                `;
            } else {

                centro.innerHTML += `
                <div class="card-movie"><img src="https://image.tmdb.org/t/p/w300${i.poster_path}" /></div>
                `;
            }

        }

    })
})

fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&languague=en-US&page=3')
.then(response=> response.json())
.then(data => {
    const centro = document.querySelector('.centro'); // Encontrar o elemento com a classe 'centro'

    data.results.map((i, j) => {

        if (j > 14)
            return;
        if (j == 0) {

            centro.innerHTML += `
            <div class="banner-principal" style="margin-top:10px;background-image:url('https://image.tmdb.org/t/p/original${i.backdrop_path}')"></div>
            `;
        } else {
            if (j == 1) {
                centro.innerHTML += `
                <div class="card-movie"><img src="https://image.tmdb.org/t/p/w300${i.poster_path}" /></div>
                `;
            } else {

                centro.innerHTML += `
                <div class="card-movie"><img src="https://image.tmdb.org/t/p/w300${i.poster_path}" /></div>
                `;
            }

        }

    })
})

fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&languague=en-US&page=4')
.then(response=> response.json())
.then(data => {
    const centro = document.querySelector('.centro'); // Encontrar o elemento com a classe 'centro'

    data.results.map((i, j) => {

        if (j > 14)
            return;
        if (j == 0) {

            centro.innerHTML += `
            <div class="banner-principal" style="margin-top:10px;background-image:url('https://image.tmdb.org/t/p/original${i.backdrop_path}')"></div>
            `;
        } else {
            if (j == 1) {
                centro.innerHTML += `
                <div class="card-movie"><img src="https://image.tmdb.org/t/p/w300${i.poster_path}" /></div>
                `;
            } else {

                centro.innerHTML += `
                <div class="card-movie"><img src="https://image.tmdb.org/t/p/w300${i.poster_path}" /></div>
                `;
            }

        }

    })
})

fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&languague=en-US&page=5')
.then(response=> response.json())
.then(data => {
    const centro = document.querySelector('.centro'); // Encontrar o elemento com a classe 'centro'

    data.results.map((i, j) => {

        if (j > 14)
            return;
        if (j == 0) {

            centro.innerHTML += `
            <div class="banner-principal" style="margin-top:10px;background-image:url('https://image.tmdb.org/t/p/original${i.backdrop_path}')"></div>
            `;
        } else {
            if (j == 1) {
                centro.innerHTML += `
                <div class="card-movie"><img src="https://image.tmdb.org/t/p/w300${i.poster_path}" /></div>
                `;
            } else {

                centro.innerHTML += `
                <div class="card-movie"><img src="https://image.tmdb.org/t/p/w300${i.poster_path}" /></div>
                `;
            }

        }

    })
})
