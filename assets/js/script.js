var searchCityBtn = document.getElementById("searchCityBtn");
var userCity = document.getElementById("inputSearch");
var currentTimeEl = document.querySelector(".currentTime");
var temperatureEl = document.querySelector(".temperature");
var cardGroupEl = document.querySelector(".card-header");

var data = localStorage.getItem("inputSearch");
console.log(data);
//current time
var time = dayjs().format("hh:mm A");
$(".currentTime").text(time);

//5 day
$(function () {
  var fiveDay = dayjs().format("MMM D YYYY");
  $(".card-header").html(fiveDay);
});

function getLonLatApi(event) {
  event.preventDefault();
  var city = userCity.value.trim();
  var apiKey = "b669ae4ac48bc41896b2dabb9c94a7ff";
  var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&limit=5&appid=${apiKey}`;
  console.log("city", city);

  fetch(requestUrl).then(function (response) {
    if (response.ok)
      return response
        .json()
        .then(function (response) {
          console.log("response", response);
        })
        .then((data) => {
          var temp = (data) => {
            temperatureEl.textContent = ".temperature";
          };
        });
  });
}

searchCityBtn.addEventListener("submit", getLonLatApi);

// console.log("this", getLonLatApi );
// $(function () {
//   var todaysDate = dayjs().format("hh:mm a");
//   $(".currentTime").html(todaysDate);
//   setInterval(currentTimeEl);
// });
