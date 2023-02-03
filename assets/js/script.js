var searchCityBtn = document.getElementById("searchCityForm");
var userCity = document.getElementById("inputSearch");

function getApi(event) {
  event.preventDefault();
  var city = userCity.value.trim();
  var apiKey = "b669ae4ac48bc41896b2dabb9c94a7ff";
  var requestUrl =
    "http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}";

  fetch(requestUrl).then(function (response) {
    response.json();
    console.log("response: ", response);
  });
}
searchCityBtn.addEventListener("submit", getApi);
