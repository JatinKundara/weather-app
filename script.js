
const apiKey = 'a60713cadd364da09f2faabac1313300';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const inputBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherCondition = document.querySelector('.weather-icon');

async function fecthApi(city){

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if(response.status === 404){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('#weather').style.display = 'none';
        
    }
    else if(inputBox.value === ''){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('#weather').style.display = 'none';
    }
    else{
        var data = await response.json();
        
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.city-name').innerHTML = data.name;
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind-speed').innerHTML = data.wind.speed + ' Km/h';

        if (data.weather[0].main == 'Clouds') {
            weatherCondition.src = 'img/clouds.png';
        }
        else if(data.weather[0].main == 'Clear'){
            weatherCondition.src = 'img/clear.png';
        }
        else if(data.weather[0].main == 'Drizzle'){
            weatherCondition.src = 'img/drizzle.png';
        }
        else if(data.weather[0].main == 'Mist'){
            weatherCondition.src = 'img/mist.png';
        }
        else if(data.weather[0].main == 'Rain'){
            weatherCondition.src = 'img/rain.png';
        }
        else if(data.weather[0].main == 'Snow'){
            weatherCondition.src = 'img/snow.png';
        }

        document.querySelector('.error').style.display = 'none';
        document.querySelector('#weather').style.display = 'block';
    }
    
}

searchBtn.addEventListener('click', () => {
    fecthApi(inputBox.value)
})