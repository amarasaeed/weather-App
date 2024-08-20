const Apikey = "3e3755475fa27d3e3ed943761950b65a";
const ApiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchinput=document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")
const weathericons=document.querySelector(".weather-icon")

async function CheckWeather(city) {
    const response = await fetch(ApiURL + city + `&appid=${Apikey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block"
        
document.querySelector(".weather").style.display="none"
    }
    else{
        const data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
    if(data.weather[0].main=="Clouds"){
        weathericons.src="images/clouds.png"
    }
    else if(data.weather[0].main=="Clear"){
        weathericons.src="images/clear.png"
    }
    else if(data.weather[0].main=="Rain"){
        weathericons.src="images/rain.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        weathericons.src="images/drizzle.png"
    }
    else if(data.weather[0].main=="Mist"){
        weathericons.src="images/mist.png"
    }
    
    document.querySelector(".weather").style.display="block"
    document.querySelector(".error").style.display="none"
    
    
    }
    }
    
searchbtn.addEventListener('click',()=>{
    CheckWeather(searchinput.value)
})
