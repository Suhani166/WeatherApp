const cityInput = document.querySelector("#city-input");
const form = document.querySelector("form");
const innerData = document.querySelector(".inner-container");
const loading = document.querySelector(".loading");

const clearSky = document.querySelector('#clear_sky_day');
const clearSkyNight = document.querySelector("#clear_sky_night");
const cloudySky = document.querySelector("#cloudy_sky_day");
const cloudySkyNight = document.querySelector("#cloudy_sky_night");
const brokenClouds = document.querySelector("#broken_clouds_day");
const brokenCloudsNight = document.querySelector("#broken_clouds_night");
const rainyDay = document.querySelector('#rainy_day');
const rainyNight = document.querySelector("#rainy_night");
const thunderstormDay = document.querySelector("#thunderstorm_day");
const thunderstormNight = document.querySelector("#thunderstorm_night");
const snowyDay = document.querySelector("#snowy_day");
const snowyNight = document.querySelector("#snowy_night");
const mistyDay = document.querySelector("#misty_day");
const mistyNight = document.querySelector("#misty_night");

const apiKey = "877e352f647cdcb56286d869417dfdb4";

function reset(){
    clearSky.style.opacity =0;
    clearSkyNight.style.opacity = 0;
    cloudySky.style.opacity = 0;
    cloudySkyNight.style.opacity = 0;
    brokenClouds.style.opacity =0;
    brokenCloudsNight.style.opacity = 0;
    rainyDay.style.opacity=0;
    rainyNight.style.opacity=0;
    thunderstormDay.style.opacity = 0;
    thunderstormNight.style.opacity = 0;
    snowyDay.style.opacity=0;
    snowyNight.style.opacity=0;
    mistyDay.style.opacity = 0;
    mistyNight.style.opacity = 0;
}
form.addEventListener("submit", (event) => {
	event.preventDefault();

	const fetchWeather = async function () {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}`
		);
		const responseJSON = response.json();
		return responseJSON;
	};

	const weatherData = fetchWeather();
	weatherData.then((data) => {
		loading.innerHTML = `<div class="loader">
						<div class="orbe" style="--index: 0"></div>
						<div class="orbe" style="--index: 1"></div>
						<div class="orbe" style="--index: 2"></div>
						<div class="orbe" style="--index: 3"></div>
						<div class="orbe" style="--index: 4"></div>
					</div>`;
		let UpdatedHtml = `
        <div class="city-container">
					<div class="city-name">${data.name}, ${data.sys.country}</div>
					<div class="weather-condition">${data.weather[0].main}</div>
				</div>

				<div class="temp-container">
					<div class="weather-icon"><img src="http://openweathermap.org/img/wn/${
						data.weather[0].icon
					}@2x.png" alt="" /></div>
					<div class="temp">${(data.main.temp - 273.15).toFixed(2)}°C</div>
					<div class="minmax">
						<div class="min">Min: ${(data.main.temp_min - 273.15).toFixed(2)}°C</div>
						<div class="max">Max: ${(data.main.temp_max - 273.15).toFixed(2)}°C</div>
					</div>
				</div>
        `;

		innerData.innerHTML = UpdatedHtml;
		loading.innerHTML = ``;
        
        switch (data.weather[0].icon) {
			case "01d":
				reset();
				clearSky.style.opacity = 1;
				break;
			case "01n":
				reset();
				clearSkyNight.style.opacity = 1;
				break;
			case "02d":
				reset();
				cloudySky.style.opacity = 1;
				break;
			case "03d":
				reset();
				cloudySky.style.opacity = 1;
				break;
			case "02n":
				reset();
				cloudySkyNight.style.opacity = 1;
				break;
			case "03n":
				reset();
				cloudySkyNight.style.opacity = 1;
				break;
			case "04d":
				reset();
				brokenClouds.style.opacity = 1;
				break;
			case "04n":
				reset();
				brokenCloudsNight.style.opacity = 1;
				break;
			case "09d":
				reset();
				rainyDay.style.opacity = 1;
				break;
			case "10d":
				reset();
				rainyDay.style.opacity = 1;
				break;
			case "09n":
				reset();
				rainyNight.style.opacity = 1;
				break;
			case "10n":
				reset();
				rainyNight.style.opacity = 1;
				break;
			case "11d":
				reset();
				thunderstormDay.style.opacity = 1;
				break;
			case "11n":
				reset();
				thunderstormNight.style.opacity = 1;
				break;
			case "13d":
				reset();
				snowyDay.style.opacity = 1;
				break;
			case "13n":
				reset();
				snowyNight.style.opacity = 1;
				break;
			case "50d":
				reset();
				mistyDay.style.opacity = 1;
				break;
			case "50n":
				reset();
				mistyDay.style.opacity = 1;
				break;
			default:
				break;
		}
	});
	loading.innerHTML = `<div class="loader">
						<div class="orbe" style="--index: 0"></div>
						<div class="orbe" style="--index: 1"></div>
						<div class="orbe" style="--index: 2"></div>
						<div class="orbe" style="--index: 3"></div>
						<div class="orbe" style="--index: 4"></div>
					</div>`;
});
