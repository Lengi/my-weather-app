function refreshWeather(response) {
  let tempCurrentElement = document.querySelector("#weather-app-temp");
  let temp = response.data.temperature.current;
  let cityElement = document.querySelector("#weather-app-city");

  cityElement.innerHTML = response.data.city;
  tempCurrentElement.innerHTML = Math.round(temp);
}

function searchCity(city) {
  let apiKey = "22f8da0004607a380oa863e4bc7fdtdd";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("London");
