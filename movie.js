var main = document.querySelectorAll('.main .center')[0];

fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&languague=en-US&page=1')
.then(response=> response.json())
.then(data=>{
    console.log(data);
}
    
    
    )