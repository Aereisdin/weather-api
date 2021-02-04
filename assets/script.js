//DOM Var
var hero = document.querySelector(".hero");
var heroID = document.querySelector("#hero");
var cityList = document.querySelector(".cityList");
var currentCity = document.querySelector("#currentCity");
var timeStamp = document.querySelector("#lastUpdated");
var currentWeather = document.querySelector("#currentWeather");
var currentHigh = document.querySelector("#currentHigh");
var currentTemp = document.querySelector("#currentTemp");
var currentLow = document.querySelector("#currentLow");
var feelsLike = document.querySelector("#feelsLike");
var currentHumidity = document.querySelector("#currentHumidity");
var day1 = document.querySelector("#Day1")
var day2 = document.querySelector("#Day2")
var day3 = document.querySelector("#Day3")
var day4 = document.querySelector("#Day4")
var day5 = document.querySelector("#Day5")


function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + hour + ':' + min;
    return time;
  }
  console.log(timeConverter(1612401214));
  

// Pexel API Material
var pexelsKey = '563492ad6f91700001000001ca768a47efe1407ea915ac9502624850';
var pexelsQuery = "Seattle"
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
                var photographer = data.photos[0].photographer
                var photographerAddy = data.photos[0].photographer_url
                var photoCredit = "<a class='creditsArt' href="+photographerAddy+"v target='_blank'>Art by "+photographer+"</a>"
                var pCredit = document.createElement('div');
                pCredit.innerHTML = photoCredit
                console.log(photo);
                console.log(photographer, photographerAddy)
                hero.style.backgroundImage = photo; 
                hero.append(pCredit);
            }); 
// Openweather API Material
// Openweather Current Conditions
var openWeatherApiKey = '6b164df68f52a0312b614f98c9e4f6cf';
var cityName = 'Seattle';
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
    console.log(data);
   
    timeStamp.textContent = 'Updated: '+timeConverter(data.dt);
    currentCity.textContent = data.name;
    currentWeather.textContent = 'Currently: '+data.weather[0].main;
    currentTemp.textContent = 'Current Temperature: '+data.main.temp+'°F';
    currentHigh.textContent = 'High Temperature: '+data.main.temp_max+'°F';
    currentLow.textContent = 'Low Temperature: '+data.main.temp_min+'°F';
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
            console.log(data)
            })
    
})

