var searchCityBtn = document.getElementById("searchCityBtn");
var userCity = document.getElementById("inputSearch");
var currentTimeEl = document.querySelector(".currentTime");
var temperatureEl = document.querySelector(".temperature");

function getLonLatApi(event) {
  event.preventDefault();
  var city = userCity.value.trim();
  var apiKey = "b669ae4ac48bc41896b2dabb9c94a7ff";
  var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&limit=5&appid=${apiKey}`;
  console.log("city", city);

  fetch(requestUrl).then(function (response) {
    if (response.ok)
      return response.json().then(function (response) {
        console.log("response", response);
      });
  });
}
function weatherTemp(data) {}

searchCityBtn.addEventListener("submit", getLonLatApi);
// console.log("this", getLonLatApi );
// $(function () {
//   var todaysDate = dayjs().format("hh:mm a");
//   $(".currentTime").html(todaysDate);
//   setInterval(currentTimeEl);
// });
