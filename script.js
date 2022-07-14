var weatherContainer=document.getElementById('weatherContainer')

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=41007815a25cc8e0197769e5266679bc

getWeatherData()

async function getWeatherData(){
    var cityName=document.getElementById('cityName').value
    console.log(cityName)
    let data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=41007815a25cc8e0197769e5266679bc`)
    let res=await data.json()
    console.log(res)


    weatherContainer.innerHTML=`
    <div class="row g-0">
                <div class="col-md-4">
                <img src="https://www.bviddm.com/wp-content/uploads/2021/06/MGN_1280x960_91016C00-AQCAQ-860x645-1.jpg" style="height:200px;width:190px;" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Weather Update ${cityName}</h5>
                        <p class="card-text m-0"><small class="text-muted">Humidity:${res.main.humidity}</small></p>
                        <p class="card-text m-0"><small class="text-muted">Humidity:${res.wind.speed}</small></p>
                        <p class="card-text m-0"><small class="text-muted">Humidity:${res.main.temp}</small></p>
                        <p class="card-text m-0"><small class="text-muted">Humidity:${res.weather[0].description}</small></p>
                    </div>
                </div>
     </div>`

}



    
