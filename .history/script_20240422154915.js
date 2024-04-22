// API key = 1c715de62f4d6871c9a31cafbc734d02
let weather = {
    apiKey: "1c715de62f4d6871c9a31cafbc734d02",
    fetchWeather: function (city) {
        fetch (
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            +city 
            + "&units=metric&appid=" 
            + this.apiKey
         )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data))
            .catch(error => console.log("Error fetching weather:", error));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        // Ensure loading the icon over HTTPS
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" +icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "&#8451;";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".speed")
        
    }
};
// weather.fetchWeather("tokyo");