function displayTemperature(response) {
  console.log(response.data);
  let showTemperature = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  showTemperature.innerHTML = temperature;
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#change-city");

  let city = searchInput.value;

  let apiKey = "41319e274o17aaba3e24c4df247ct0f7";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(displayTemperature);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let dateToday = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let day = days[dateToday.getDay()];
let hours = dateToday.getHours();
let minutes = dateToday.getMinutes();

if (minutes < 10) {
  minutes = `0${minutes}`;
}

if (hours < 10) {
  hours = `0${hours}`;
}

let today = document.querySelector("#current-date");
today.textContent = `${day}, ${hours}:${minutes}`;
