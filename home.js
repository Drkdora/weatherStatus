

// For Geolocation and Weather API
function geoWeather(){
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showPosi);
    }
    else
    {
        console.log("Geolocation is not supported")

    }
}

function showPosi(data) {
    console.log(data.coords)
    let latti = data.coords.latitude
    let long = data.coords.longitude

    document.getElementById("loc1").innerHTML=`Your Latitude is ${latti} & Longitude is${long}`;

    let url= `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latti}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    fetch(url,{method:'GET'})//api called
    .then((res)=>res.json())// api promise
    .then((data)=>{// get the data
        let place = data.city.name;
        let climate = data.list[0].weather[0].main;
        let climate_des = data.list[0].weather[0].description;
        document.getElementById("loc2").innerHTML=`Your are at ${place}`
        document.getElementById("weather").innerHTML=`The weather is ${climate} & ${climate_des}`
        
    })

    
}