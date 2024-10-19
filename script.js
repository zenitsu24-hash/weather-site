//https://api.openweathermap.org/data/2.5/weather?q=london&appid=bf7b168cef51f022225d46cde159883c&units=metric

const apikey = "bf7b168cef51f022225d46cde159883c";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const input = document.getElementById("input");
const search = document.getElementById("btn");
const weathericon = document.getElementById("weather-icon")

async function weather(city){
    const response = await fetch(apiurl+city+`&appid=${apikey}`)

    let data = await response.json()
    console.log(data)

    document.getElementById("state").innerHTML = data.name;
    document.getElementById("temp1").innerHTML = Math.round(data.main.temp) + "°c";
    document.getElementById("humid1").innerHTML = data.main.humidity + "%";
    document.getElementById("wind1").innerHTML = data.wind.speed + "KM/H";

    if(data.weather[0].main == "Clear"){
        weathericon.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weathericon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Clouds"){
        weathericon.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src = "images/mist.png"
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src = "images/rain.png"
    }
    else if(data.weather[0].main == "Snow"){
        weathericon.src = "images/snow.png"
    }

}
search.addEventListener("click", ()=>{
    weather(input.value)
})
