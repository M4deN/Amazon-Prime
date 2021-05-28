var main = document.querySelectorAll('.main .center')[0];

fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&languague=en-US&page=1')
.then(response=> response.json())
 .then(data=>{
    data.results.map((i,j)=>{
        
        if(j > 16)
            return;
        if(j == 0){

            main.innerHTML+=`
            
            <div class="banner-principal" style="margin-top:10px;background-image:url('https://image.tmdb.org/t/p/original`+i.backdrop_path+`')"></div>
            `;
        }else{
            if(j==1){
                main.innerHTML+=`
                    <h2>BEM VINDO ÉDER OLIVEIRA</h2>
                    <div class="card-movie"><img src="https://image.tmdb.org/t/p/w300`+i.poster_path+`" /></div>
                `;
            }else{

                main.innerHTML+=`
                    
                    <div class="card-movie"><img src="https://image.tmdb.org/t/p/w300`+i.poster_path+`" /></div>
                `;
            }
        
        }

    })
})

fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&languague=en-US&page=2')
.then(response=> response.json())
 .then(data=>{
    data.results.map((i,j)=>{
        
        if(j > 16)
            return;
        if(j == 0){

            main.innerHTML+=`
            <h2>EM CARTAZ</h2>
            <div class="banner-principal" style="margin-top:10px;background-image:url('https://image.tmdb.org/t/p/original`+i.backdrop_path+`')"></div>
            `;
        }else{
            if(j==1){
                main.innerHTML+=`
                    <h2>AÇÃO</h2>
                    <div class="card-movie"><img src="https://image.tmdb.org/t/p/w300`+i.poster_path+`" /></div>
                `;
            }else{

                main.innerHTML+=`
                    
                    <div class="card-movie"><img src="https://image.tmdb.org/t/p/w300`+i.poster_path+`" /></div>
                `;
            }
        
        }

    })
})
fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&languague=en-US&page=3')
.then(response=> response.json())
 .then(data=>{
    data.results.map((i,j)=>{
        
        if(j > 16)
            return;
        if(j == 0){

            main.innerHTML+=`
                <h2>EM CARTAZ</h2>
                 <div class="banner-principal" style="margin-top:20px;background-image:url('https://image.tmdb.org/t/p/original`+i.backdrop_path+`')"></div>
            `;
        }else{
            if(j==1){
                main.innerHTML+=`
                <h2>PARA ASSISTIR AGORA</h2>
                    <div class="card-movie"><img src="https://image.tmdb.org/t/p/w300`+i.poster_path+`" /></div>
                `;
            }else{

                main.innerHTML+=`
                    
                    <div class="card-movie"><img src="https://image.tmdb.org/t/p/w300`+i.poster_path+`" /></div>
                `;
            }
        
        }

    })
})
fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&languague=en-US&page=4')
.then(response=> response.json())
 .then(data=>{
    data.results.map((i,j)=>{
        
        if(j > 16)
            return;
        if(j == 0){

            main.innerHTML+=`
                 <h2>EM CARTAZ</h2>
                 <div class="banner-principal" style="margin-top:20px;background-image:url('https://image.tmdb.org/t/p/original`+i.backdrop_path+`')"></div>
            `;
        }else{
            if(j==1){
                main.innerHTML+=`
                 <h2>SUSPENSE</h2>
                    <div class="card-movie"><img src="https://image.tmdb.org/t/p/w300`+i.poster_path+`" /></div>
                `;
            }else{

                main.innerHTML+=`
                    
                    <div class="card-movie"><img src="https://image.tmdb.org/t/p/w300`+i.poster_path+`" /></div>
                `;
            }
        
        }

    })
})
fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&languague=en-US&page=5')
.then(response=> response.json())
 .then(data=>{
    data.results.map((i,j)=>{
        
        if(j > 16)
            return;
        if(j == 0){

            main.innerHTML+=`
                <h2>EM CARTAZ</h2>
                 <div class="banner-principal" style="margin-top:20px;background-image:url('https://image.tmdb.org/t/p/original`+i.backdrop_path+`')"></div>
            `;
        }else{
            if(j==1){
                main.innerHTML+=`
                    <h2>AVENTURA</h2>
                    <div class="card-movie"><img src="https://image.tmdb.org/t/p/w300`+i.poster_path+`" /></div>
                `;
            }else{

                main.innerHTML+=`
                    
                    <div class="card-movie"><img src="https://image.tmdb.org/t/p/w300`+i.poster_path+`" /></div>
                `;
            }
        
        }

    })
})