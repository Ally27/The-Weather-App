//tracking
var cardTextEl = document.getElementById("card-text");
var searchCityBtn = document.getElementById("searchCityBtn");
var userCity = document.getElementById("inputSearch");
var currentTimeEl = document.querySelector(".currentTime");
var temperatureEl = document.querySelector(".temperature");
var cardGroupEl = document.querySelector(".card-header");
var cheaderEl = document.getElementById("cheader");
var fiveDay = 5;
var previousSearches =
  JSON.parse(localStorage.getItem("previousSearches")) || [];

//current time
var time = dayjs().format("MMM D, hh:mm:ss A");
$(".currentTime").text(time);

//5 day
$(function () {
  var fiveDay = dayjs().format("MMM D YYYY");
  $(".card-header").html(fiveDay);
  for (var i = 0; i < fiveDay.length; i++) return i;
});
//calling api with local storage on temp
function getLocationApi(event) {
  // console.log(getLocationApi);
  event.preventDefault();
  var city = userCity.value.trim();
  var apiKey = "b669ae4ac48bc41896b2dabb9c94a7ff";
  var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&limit=5&appid=${apiKey}`;

  //fetches the api
  fetch(requestUrl).then(function (response) {
    if (response.ok) previousSearches.push(city);
    localStorage.setItem("previousSearches", JSON.stringify(previousSearches));
    return response.json().then(function (response) {
      // console.log("response", response);
      // console.log("response", response.list[0].main.temp);
      temperatureEl.textContent = response.list[0].main.temp;
      localStorage.setItem("temp", response.list[0].main.temp);
    });
  });
}

// attempting to create location history
function saveSearches() {
  localStorage.setItem("pastSearches", JSON.stringify(pastSearchesEl));
}
searchCityBtn.addEventListener("submit", getLocationApi);
