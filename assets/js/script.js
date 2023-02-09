//tracking
var cardTextEl = document.getElementById("card-text");
var searchCityBtn = document.getElementById("searchCityBtn");
var userCity = document.getElementById("inputSearch");
var currentTimeEl = document.querySelector(".currentTime");
var temperatureEl = document.querySelector(".temperature");
var cardGroupEl = document.querySelector(".card-header");
var cheaderEl = document.getElementById("cheader");
var previousSearchContainerEl = document.getElementById(
  "previousSearchContainer"
);

var city;
var temp;
var wind;
var humidity;

var previousSearches = JSON.parse(localStorage.getItem("previousSearches"));

//current time
var time = dayjs().format("hh:mm A");
$(".currentTime").text(time);

//5 day
$(function () {
  var fiveDay = dayjs().format("MMM D YYYY");
  $(".card-header").html(fiveDay);
});

function getLocationApi(event) {
  event.preventDefault();
  var city = userCity.value.trim();
  var apiKey = "b669ae4ac48bc41896b2dabb9c94a7ff";
  var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&limit=5&appid=${apiKey}`;

  fetch(requestUrl).then(function (response) {
    if (response.ok)
      return response.json().then(function (response) {
        console.log("response", response);
        console.log("response", response.list[0].main.temp);
        temperatureEl.textContent = response.list[0].main.temp;
        localStorage.setItem("temp", response.list[0].main.temp);
      });
  });
}

function saveSearches() {
  localStorage.setItem("previousSearches", JSON.stringify(previousSearches));
}
searchCityBtn.addEventListener("submit", getLocationApi);

// console.log("this", getLonLatApi );
// $(function () {
//   var todaysDate = dayjs().format("hh:mm a");
//   $(".currentTime").html(todaysDate);
//   setInterval(currentTimeEl);
// });
