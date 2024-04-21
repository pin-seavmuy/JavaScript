// API key = 1c715de62f4d6871c9a31cafbc734d02
let weather = {
    "apiKey": "1c715de62f4d6871c9a31cafbc734d02",
    fetchWeather: function (city) {
        fetch (
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            +city 
            + "&units=metric&appid=" 
            + apiKey
         )
            .then((response) => response.json())
            .then((data) => console.log(data));
    },
    displayWeather: function(data) {

    }
};