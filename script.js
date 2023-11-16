let weather = {
    "apikey":"a73f2c775cbb9037d6b749d31ffa69cb",
     fetchWeather: function(city)
    {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city +
        "&units=metric&appid=" + this.apikey
        )
        .then((response) => response.json())
        .then((data) => this.displayweather(data));
    },
    displayweather: function(data){
        const{ name } = data;
        const{country} = data.sys;
        const{lat,lon} = data.coord;
        const{ icon, description} = data.weather[0];
        const{ temp,humidity,temp_min,temp_max,feels_like } = data.main;
        const{ speed }=data.wind;
        document.querySelector(".city").innerText =  name + " | " + country;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".temp").innerText = "Temperature: " + temp +"°C";
        document.querySelector(".feel").innerText = "Real feel: " + feels_like +"°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind: " + speed + "km/h";
        document.querySelector(".min_temp").innerText = "Min: " + temp_min + "°";
        document.querySelector(".max_temp").innerText = "Max: " + temp_max + "°";
        document.querySelector(".lon").innerText = "lon: " +lon;
        document.querySelector(".lat").innerText = "lat: " +lat;
        document.querySelector(".discription").innerText = description;
        document.querySelector(".weather").classList.remove("loading");
        // document.body.style.backgroundImage= "url('https://images.unsplash.com/photo-1592210454359-9043f067919b?"+ name + "')"
            console.log(data)
 },
 select:function(){
this.fetchWeather(document.querySelector(".cities").value);
 }
};
document.querySelector(".select button").addEventListener("click",function(){
weather.select(); 
});
weather.fetchWeather("New Delhi");