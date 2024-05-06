const apikey = 'ae7bad9b7b664f44b9cff9a53c49333d';
const URL =" https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const cityName = document.querySelector(".search input");
const buttonClick = document.querySelector(".search button");
const weatherIcon = document.querySelector(".climate-pic")
async function checkWeather(cityName){
    const response = await fetch(URL + cityName +`&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".climate").style.display = "none";
    }else{
        var data = await response.json();
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed)+" Km/h";
    if(data.weather[0].main =="Clouds"){
        weatherIcon.src = "image/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "image/clear.png"
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "image/drizzle.png"
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "image/mist.png"
    }else if(data.weather[0].main =="Rain"){
        weatherIcon.src = "image/rain.png"
    }else if(data.weather[0].main =="Snow"){
        weatherIcon.src =="image/snow.png"
    }

    document.querySelector(".climate").style.display = "block"
    document.querySelector(".error").style.display = "none"
    }
    
}

buttonClick.addEventListener("click",()=>{
    checkWeather(cityName.value);
});
