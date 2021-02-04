//DOM Var
var hero = document.querySelector(".hero");
var cityList = document.querySelector(".cityList");
var currentCity = document.querySelector("#currentCity");
var timeStamp = document.querySelector("#lastUpdated");
var currentWeather = document.querySelector("#currentWeather");
var currentHigh = document.querySelector("#currentHigh");
var currentTemp = document.querySelector("#currentTemp");
var currentLow = document.querySelector("#currentLow");
var feelsLike = document.querySelector("#feelsLike");
var currentHumidity = document.querySelector("#currentHumidity");
var day1 = document.querySelector("#Day1");
var day2 = document.querySelector("#Day2");
var day3 = document.querySelector("#Day3");
var day4 = document.querySelector("#Day4");
var day5 = document.querySelector("#Day5");
var citySearch = document.querySelector("#citySearch"); // form
var citySearched = document.getElementById('city'); // input
var cityName = 'Seattle';
var searched = document.querySelectorAll(".searched");

var buttonClickHandler = function (event) {
    cityName = event.target.getAttribute('data-city');
    if (cityName) {
      citySearchHandler(cityName);
      citySearched.textContent = '';
    }
  };
var citySubmitHandler = function (event) {
    event.preventDefault();
    cityName = citySearched.value;

    if (cityName) {
      citySearchHandler(cityName);
  
      citySearched.textContent = '';
      citySearch.value = '';
    } else {
      alert('Please enter a City name');
    }
}

function citySearchHandler() {
    // cityName = citySearched.value;
    var searched = document.createElement('div');
    searched.classList = 'cell medium-12 searched';
    searched.textContent = cityName;
    searched.setAttribute('data-city', cityName)
    cityList.appendChild(searched)
    citySearched.value = '';

// Pexel API Material
var pexelsKey = '563492ad6f91700001000001ca768a47efe1407ea915ac9502624850';
var pexelsQuery = cityName
    var pexels = "https://api.pexels.com/v1/search?query="+pexelsQuery+"&per_page=1";
  
        fetch(pexels, {
        method: 'GET',
        headers: { 'Authorization': pexelsKey },
        })
        .then(function (response) {
            return response.json();
          })
            .then(function(data) {console.log(data);
                var hero = document.querySelector(".hero");
                var img = data.photos[0].src.original; 
                var photo = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('"+img+"'),";
                var creditsArt = document.querySelector(".creditsArt");
                var photographer = data.photos[0].photographer;
                var photographerAddy = data.photos[0].photographer_url;
                var photoCredit = "<a href="+photographerAddy+"v target='_blank'>Art by "+photographer+"</a>"
                creditsArt.innerHTML = photoCredit;
                console.log(photo);
                console.log(photographer, photographerAddy)
                hero.innerHTML = '<style="background-image:"'+photo+'"'; 
            }); 
// Openweather API Material
// Openweather Current Conditions
var openWeatherApiKey = '6b164df68f52a0312b614f98c9e4f6cf';
var lat = 0;
var lon = 0;

var openWeatherCurrentUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+cityName+','+stateCode+'&units=imperial&appid='+openWeatherApiKey+'';
fetch(openWeatherCurrentUrl, {
    method: 'GET',
})
    .then(function (response) {
        return response.json();
        })
    .then(function (data){
   
    timeStamp.textContent = 'Updated: '+timeConverter(data.dt);
    currentCity.textContent = data.name;
    currentWeather.textContent = 'Currently: '+data.weather[0].main;
    currentTemp.textContent = 'Current Temperature: '+data.main.temp+'°F';
    currentHigh.textContent = 'Wind Speed: '+data.wind.speed+'mph';
    feelsLike.textContent = 'Feels like '+data.main.feels_like+'°F';
    currentHumidity.textContent = 'Humidity is '+data.main.humidity;
    //Openweather Forecast Conditions
    lat = data.coord.lat;
    lon = data.coord.lon;
    var openWeatherForecastUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&units=imperial&exclude=minutely,hourly&appid='+openWeatherApiKey+'';
        fetch(openWeatherForecastUrl, {
        method: 'GET',
        })
            .then(function (response) {
             return response.json();
             })
            .then(function (data){
            
                        //Weather Icons
                        var sun = '<i class="fas fa-sun fa-3x"></i>';
                        var partialSun = '<i class="fas fa-cloud-sun fa-3x"></i>';
                        var cloudy = '<i class="fas fa-cloud fa-3x"></i>';
                        var partlyRain = '<i class="fas fa-cloud-sun-rain fa-3x"></i>';
                        var rain = '<i class="fas fa-cloud-showers-heavy fa-3x"></i>';
                        var thunder = '<i class="fas fa-bolt fa-3x"></i>';
                        var snow = '<i class="far fa-snowflake fa-3x"></i>';
                        var fog = '<i class="fas fa-smog fa-3x"></i>'
                        
                        var iconNumber1 = data.daily[1].weather[0].icon.substr(0, 2);
                        if(iconNumber1 == 01){var icon1 = sun}
                        else if(iconNumber1 == 02){var icon1 = partialSun}
                        else if(iconNumber1 == 03){var icon1 = cloudy}
                        else if(iconNumber1 == 04){var icon1 = cloudy}
                        else if(iconNumber1 == 09){var icon1 = partlyRain}
                        else if(iconNumber1 == 10){var icon1 = rain}
                        else if(iconNumber1 == 11){var icon1 = thunder}
                        else if(iconNumber1 == 13){var icon1 = snow}
                        else if(iconNumber1 == 50){var icon1 = fog}
            
                        var iconNumber2 = data.daily[2].weather[0].icon.substr(0, 2);
                        if(iconNumber2 == 01){var icon2 = sun}
                        else if(iconNumber2 == 02){var icon2 = partialSun}
                        else if(iconNumber2 == 03){var icon2 = cloudy}
                        else if(iconNumber2 == 04){var icon2 = cloudy}
                        else if(iconNumber2 == 09){var icon2 = partlyRain}
                        else if(iconNumber2 == 10){var icon2 = rain}
                        else if(iconNumber2 == 11){var icon2 = thunder}
                        else if(iconNumber2 == 13){var icon2 = snow}
                        else if(iconNumber2 == 50){var icon2 = fog}
            
                        var iconNumber3 = data.daily[3].weather[0].icon.substr(0, 2);
                        if(iconNumber3 == 01){var icon3 = sun}
                        else if(iconNumber3 == 02){var icon3 = partialSun}
                        else if(iconNumber3 == 03){var icon3 = cloudy}
                        else if(iconNumber3 == 04){var icon3 = cloudy}
                        else if(iconNumber3 == 09){var icon3 = partlyRain}
                        else if(iconNumber3 == 10){var icon3 = rain}
                        else if(iconNumber3 == 11){var icon3 = thunder}
                        else if(iconNumber3 == 13){var icon3 = snow}
                        else if(iconNumber3 == 50){var icon3 = fog}
            
                        var iconNumber4 = data.daily[4].weather[0].icon.substr(0, 2);
                        if(iconNumber4 == 01){var icon4 = sun}
                        else if(iconNumber4 == 02){var icon4 = partialSun}
                        else if(iconNumber4 == 03){var icon4 = cloudy}
                        else if(iconNumber4 == 04){var icon4 = cloudy}
                        else if(iconNumber4 == 09){var icon4 = partlyRain}
                        else if(iconNumber4 == 10){var icon4 = rain}
                        else if(iconNumber4 == 11){var icon4 = thunder}
                        else if(iconNumber4 == 13){var icon4 = snow}
                        else if(iconNumber4 == 50){var icon4 = fog}
            
                        var iconNumber5 = data.daily[5].weather[0].icon.substr(0, 2);
                        if(iconNumber5 == 01){var icon5 = sun}
                        else if(iconNumber5 == 02){var icon5 = partialSun}
                        else if(iconNumber5 == 03){var icon5 = cloudy}
                        else if(iconNumber5 == 04){var icon5 = cloudy}
                        else if(iconNumber5 == 09){var icon5 = partlyRain}
                        else if(iconNumber5 == 10){var icon5 = rain}
                        else if(iconNumber5 == 11){var icon5 = thunder}
                        else if(iconNumber5 == 13){var icon5 = snow}
                        else if(iconNumber5 == 50){var icon5 = fog}
            
            currentLow.textContent = 'UV Index: '+data.daily[0].uvi;
            day1.innerHTML = '<h3>'+timeConverter(data.daily[1].dt)+'</h3><br><p>'+data.daily[1].weather[0].main+'</p><p>'+icon1+'</p><p>'+data.daily[1].weather[0].description+'</p><p>Temp '+data.daily[1].temp.day+'</p>';
            day2.innerHTML = '<h3>'+timeConverter(data.daily[2].dt)+'</h3><br><p>'+data.daily[2].weather[0].main+'</p><p>'+icon2+'</p><p>'+data.daily[2].weather[0].description+'</p><p>Temp '+data.daily[2].temp.day+'</p>';
            day3.innerHTML = '<h3>'+timeConverter(data.daily[3].dt)+'</h3><br><p>'+data.daily[3].weather[0].main+'</p><p>'+icon3+'</p><p>'+data.daily[3].weather[0].description+'</p><p>Temp '+data.daily[3].temp.day+'</p>';
            day4.innerHTML = '<h3>'+timeConverter(data.daily[4].dt)+'</h3><br><p>'+data.daily[4].weather[0].main+'</p><p>'+icon4+'</p><p>'+data.daily[4].weather[0].description+'</p><p>Temp '+data.daily[4].temp.day+'</p>';
            day5.innerHTML = '<h3>'+timeConverter(data.daily[5].dt)+'</h3><br><p>'+data.daily[5].weather[0].main+'</p><p>'+icon5+'</p><p>'+data.daily[5].weather[0].description+'</p><p>Temp '+data.daily[5].temp.day+'</p>';
            })
    
})
  };  

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month;
    return time;
  }
  
  

// Pexel API Material
var pexelsKey = '563492ad6f91700001000001ca768a47efe1407ea915ac9502624850';
var pexelsQuery = cityName
    var pexels = "https://api.pexels.com/v1/search?query="+pexelsQuery+"&per_page=1";
  
        fetch(pexels, {
        method: 'GET',
        headers: { 'Authorization': pexelsKey },
        })
        .then(function (response) {
            return response.json();
          })
            .then(function(data) {console.log(data);
                var hero = document.querySelector(".hero");
                var img = data.photos[0].src.original; 
                var photo = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('"+img+"'),";
                var creditsArt = document.querySelector(".creditsArt");
                var photographer = data.photos[0].photographer;
                var photographerAddy = data.photos[0].photographer_url;
                var photoCredit = "<a href="+photographerAddy+"v target='_blank'>Art by "+photographer+"</a>"
                creditsArt.innerHTML = photoCredit;
                console.log(photo);
                console.log(photographer, photographerAddy)
                hero.style.backgroundImage = photo; 
            }); 
// Openweather API Material
// Openweather Current Conditions

var openWeatherApiKey = '6b164df68f52a0312b614f98c9e4f6cf';

var stateCode = '';
var lat = 0;
var lon = 0;

var openWeatherCurrentUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+cityName+','+stateCode+'&units=imperial&appid='+openWeatherApiKey+'';
fetch(openWeatherCurrentUrl, {
    method: 'GET',
})
    .then(function (response) {
        return response.json();
        })
    .then(function (data){
   
    timeStamp.textContent = 'Updated: '+timeConverter(data.dt);
    currentCity.textContent = data.name;
    currentWeather.textContent = 'Currently: '+data.weather[0].main;
    currentTemp.textContent = 'Current Temperature: '+data.main.temp+'°F';
    currentHigh.textContent = 'Wind Speed: '+data.wind.speed+'mph';
    feelsLike.textContent = 'Feels like '+data.main.feels_like+'°F';
    currentHumidity.textContent = 'Humidity is '+data.main.humidity;
    //Openweather Forecast Conditions
    lat = data.coord.lat;
    lon = data.coord.lon;
    var openWeatherForecastUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&units=imperial&exclude=minutely,hourly&appid='+openWeatherApiKey+'';
        fetch(openWeatherForecastUrl, {
        method: 'GET',
        })
            .then(function (response) {
             return response.json();
             })
            .then(function (data){
            //Weather Icons
            
            var sun = '<i class="fas fa-sun fa-3x"></i>';
            var partialSun = '<i class="fas fa-cloud-sun fa-3x"></i>';
            var cloudy = '<i class="fas fa-cloud fa-3x"></i>';
            var partlyRain = '<i class="fas fa-cloud-sun-rain fa-3x"></i>';
            var rain = '<i class="fas fa-cloud-showers-heavy fa-3x"></i>';
            var thunder = '<i class="fas fa-bolt fa-3x"></i>';
            var snow = '<i class="far fa-snowflake fa-3x"></i>';
            var fog = '<i class="fas fa-smog fa-3x"></i>'
            
            var iconNumber1 = data.daily[1].weather[0].icon.substr(0, 2);
            if(iconNumber1 == 01){var icon1 = sun}
            else if(iconNumber1 == 02){var icon1 = partialSun}
            else if(iconNumber1 == 03){var icon1 = cloudy}
            else if(iconNumber1 == 04){var icon1 = cloudy}
            else if(iconNumber1 == 09){var icon1 = partlyRain}
            else if(iconNumber1 == 10){var icon1 = rain}
            else if(iconNumber1 == 11){var icon1 = thunder}
            else if(iconNumber1 == 13){var icon1 = snow}
            else if(iconNumber1 == 50){var icon1 = fog}
            
            var iconNumber2 = data.daily[2].weather[0].icon.substr(0, 2);
            if(iconNumber2 == 01){var icon2 = sun}
            else if(iconNumber2 == 02){var icon2 = partialSun}
            else if(iconNumber2 == 03){var icon2 = cloudy}
            else if(iconNumber2 == 04){var icon2 = cloudy}
            else if(iconNumber2 == 09){var icon2 = partlyRain}
            else if(iconNumber2 == 10){var icon2 = rain}
            else if(iconNumber2 == 11){var icon2 = thunder}
            else if(iconNumber2 == 13){var icon2 = snow}
            else if(iconNumber2 == 50){var icon2 = fog}

            var iconNumber3 = data.daily[3].weather[0].icon.substr(0, 2);
            if(iconNumber3 == 01){var icon3 = sun}
            else if(iconNumber3 == 02){var icon3 = partialSun}
            else if(iconNumber3 == 03){var icon3 = cloudy}
            else if(iconNumber3 == 04){var icon3 = cloudy}
            else if(iconNumber3 == 09){var icon3 = partlyRain}
            else if(iconNumber3 == 10){var icon3 = rain}
            else if(iconNumber3 == 11){var icon3 = thunder}
            else if(iconNumber3 == 13){var icon3 = snow}
            else if(iconNumber3 == 50){var icon3 = fog}

            var iconNumber4 = data.daily[4].weather[0].icon.substr(0, 2);
            if(iconNumber4 == 01){var icon4 = sun}
            else if(iconNumber4 == 02){var icon4 = partialSun}
            else if(iconNumber4 == 03){var icon4 = cloudy}
            else if(iconNumber4 == 04){var icon4 = cloudy}
            else if(iconNumber4 == 09){var icon4 = partlyRain}
            else if(iconNumber4 == 10){var icon4 = rain}
            else if(iconNumber4 == 11){var icon4 = thunder}
            else if(iconNumber4 == 13){var icon4 = snow}
            else if(iconNumber4 == 50){var icon4 = fog}

            var iconNumber5 = data.daily[5].weather[0].icon.substr(0, 2);
            if(iconNumber5 == 01){var icon5 = sun}
            else if(iconNumber5 == 02){var icon5 = partialSun}
            else if(iconNumber5 == 03){var icon5 = cloudy}
            else if(iconNumber5 == 04){var icon5 = cloudy}
            else if(iconNumber5 == 09){var icon5 = partlyRain}
            else if(iconNumber5 == 10){var icon5 = rain}
            else if(iconNumber5 == 11){var icon5 = thunder}
            else if(iconNumber5 == 13){var icon5 = snow}
            else if(iconNumber5 == 50){var icon5 = fog}

            currentLow.textContent = 'UV Index: '+data.daily[0].uvi;
            day1.innerHTML = '<h3>'+timeConverter(data.daily[1].dt)+'</h3><br><p>'+data.daily[1].weather[0].main+'</p><p>'+icon1+'</p><p>'+data.daily[1].weather[0].description+'</p><p>Temp '+data.daily[1].temp.day+'</p>';
            day2.innerHTML = '<h3>'+timeConverter(data.daily[2].dt)+'</h3><br><p>'+data.daily[2].weather[0].main+'</p><p>'+icon2+'</p><p>'+data.daily[2].weather[0].description+'</p><p>Temp '+data.daily[2].temp.day+'</p>';
            day3.innerHTML = '<h3>'+timeConverter(data.daily[3].dt)+'</h3><br><p>'+data.daily[3].weather[0].main+'</p><p>'+icon3+'</p><p>'+data.daily[3].weather[0].description+'</p><p>Temp '+data.daily[3].temp.day+'</p>';
            day4.innerHTML = '<h3>'+timeConverter(data.daily[4].dt)+'</h3><br><p>'+data.daily[4].weather[0].main+'</p><p>'+icon4+'</p><p>'+data.daily[4].weather[0].description+'</p><p>Temp '+data.daily[4].temp.day+'</p>';
            day5.innerHTML = '<h3>'+timeConverter(data.daily[5].dt)+'</h3><br><p>'+data.daily[5].weather[0].main+'</p><p>'+icon5+'</p><p>'+data.daily[5].weather[0].description+'</p><p>Temp '+data.daily[5].temp.day+'</p>';
        })
            
    
})
citySearch.addEventListener('submit', citySubmitHandler);
cityList.addEventListener('click', buttonClickHandler);