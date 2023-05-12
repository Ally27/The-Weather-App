//tracking
var cardTextEl = document.getElementById("card-text");
var searchCityBtn = document.getElementById("searchCityBtn");
var userCity = document.getElementById("inputSearch");
var currentTimeEl = document.querySelector(".currentTime");

var cardGroupEl = document.querySelector(".card-header");
var cheaderEl = document.getElementById("cheader");
var currentWeatherEl = document.querySelector(".currentWeather");
var cityTitle = document.querySelector(".cityTitle");
var fiveDay = 5;
var previousSearches =
  JSON.parse(localStorage.getItem("previousSearches")) || [];

//calling api with local storage on temp
function getCityName(event) {
  // console.log(getLocationApi);
  event.preventDefault();
  var cityName = userCity.value.trim();
  console.log("cityName", cityName);
  getLocationApi(cityName);
}
function getLocationApi(city) {
  var apiKey = "b669ae4ac48bc41896b2dabb9c94a7ff";
  var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&limit=40&cnt=40&appid=${apiKey}`;
  cityTitle.textContent = city;
  //fetches the api
  fetch(requestUrl).then(function (response) {
    if (response.ok) previousSearches.push(city);
    localStorage.setItem("previousSearches", JSON.stringify(previousSearches));
    return response
      .json()

      .then(function (response) {
        console.log({ response });

        displayCurrentWeather(response.list[2], 0);
        displayCurrentWeather(response.list[10], 1);
        displayCurrentWeather(response.list[18], 2);
        displayCurrentWeather(response.list[26], 3);
        displayCurrentWeather(response.list[34], 4);
        displayCurrentWeather(response.list[39], 5);

        localStorage.setItem("temp", response.list[0].main.temp);
      });
  });
}
function displayCurrentWeather(weatherData, elIndex) {
  //list of elements here
  var temperatureEl = document.querySelector(`#temperature-${elIndex}`);
  console.log("this here", elIndex, temperatureEl);
  temperatureEl.textContent = weatherData.main.temp;
  var windEl = document.querySelector(`#wind-${elIndex}`);
  console.log("here is wind:", weatherData.wind);
  windEl.textContent = weatherData.wind.speed;
  var humidityEl = document.querySelector(`#humidity-${elIndex}`);
  humidityEl.textContent = weatherData.main.humidity;

  // temperatureEl.textContent = weatherData.main.wind;
}

function dayOne(event) {
  event.preventDefault();
}

//current time
// var time = dayjs().format("MMM D, hh:mm:ss A");
// $(".currentTime").text(time);
// setInterval(time, 1000);

//current weather
// var displayCurrentWeather = function (data){

//   var storedCities = JSON.parse(localStorage.getItem("cityName"));
//   for(var i = 0; i < data.length; i++){
//     return i;
//   }
// }

//5 day
// $(function () {
//   console.log("response");
//   var fiveDay = dayjs().format("MMM D YYYY");
//   $(".card-header").html(fiveDay);
//   for (var i = 0; i < fiveDay.length; i++) return i;
// });

// eventlistener
searchCityBtn.addEventListener("submit", getCityName);
