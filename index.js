const apikey ="b903d0d30c1ba58fe48e46e05ec272b3";
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;


async function getWhetherByLocation(city){
    
try {
    const resp = await fetch(url(city), { origin: "cros" });
    const resoData = await resp.json();
    
    
    addWhetherToPage(resoData);
    addWhetherToPage2(resoData)
  } catch (error) {
    search.value='';
    console.log(error);
    alert("Please enter the correct city name");
    
  }
}


const KToC=(K)=>{
    return Math.floor(K-273.15);
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const city = search.value;
    
    try {
        if (city) {
            getWhetherByLocation(city);
        }
    } catch (error) {
        alert("Please enter a valid city name.");
    }
});

function addWhetherToPage(Data){
   const temp = KToC(Data.main.temp)

    const weather = document.createElement("div");
    weather.classList.add('card');
    weather.innerHTML=`
    <h4 class="card-title">${Data.name}</h4>
    <h6 class="card-description">${Data.weather[0].description}</h6>
    <img src="https://openweathermap.org/img/wn/${Data.weather[0].icon}@2x.png" alt="${Data.weather[0].main}" class="card-image"/>
    <h1 class="card-temperature">${temp}<sup>&deg;</sup>C</h1>
    <div class ="card-container">
        <div class='details'>
        <p class="card-min&max">Max</p>
        <span class="card-span">${KToC(Data.main.temp_max)}<sup>&deg;</sup>C</span>
        </div>
        <div class="card-details">
        <p class="card-min&max">Min</p>
        <span class="card-span">${KToC(Data.main.temp_min)}<sup>&deg;</sup>C</span>
        </div>
    </div>
    
    `
    main.innerHTML="";
    main.appendChild(weather);
    console.log(main);
    search.value='';

};
const input2 = document.getElementById("form1");
const searchField =document.getElementById("search-focus");
input2.addEventListener('submit',(event)=>{
    event.preventDefault();
    const cityCard =searchField.value;    
    try {
        if (cityCard) {
            addWhetherToPage2(cityCard);
        }
    } catch (error) {
        alert("Please enter a valid city name.");
    }
})
function addWhetherToPage2(data){
console.log(data);
const cardWeather = document.getElementById("card2")
cardWeather.innerHTML=`
<div class="container py-5">
          
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-md-9 col-lg-7 col-xl-5">
          
                  <div id="wrapper-bg" class="card text-white bg-image shadow-4-strong"
                    style="background-image: url('https://giffiles.alphacoders.com/105/105296.gif')">
                    <!-- Main current data -->
                    <div class="card-header p-4 border-0">
                      <div class="text-center mb-3">
                        <p class="h2 mb-1" id="wrapper-name"></p>
                        <p class="mb-1" id="wrapper-description"></p>
                        <p class="display-1 mb-1" id="wrapper-temp"></p>
                        <span class="">Pressure: <span id="wrapper-pressure"></span></span>
                        <span class="mx-2">|</span>
                        <span class="">Humidity: <span id="wrapper-humidity"></span></span>
                      </div>
                    </div>
          
                    <!-- Hourly forecast -->
                    <div class="card-body p-4 border-top border-bottom mb-2">
                      <div class="row text-center">
                        <div class="col-2">
                          <strong class="d-block mb-2">Now</strong>
                          <img id="wrapper-icon-hour-now" src="" class="" alt="" />
                          <strong class="d-block" id="wrapper-hour-now"></strong>
                        </div>
          
                        <div class="col-2">
                          <strong class="d-block mb-2" id="wrapper-time1"></strong>
                          <img id="wrapper-icon-hour1" src="" class="" alt="" />
                          <strong class="d-block" id="wrapper-hour1"></strong>
                        </div>
          
                        <div class="col-2">
                          <strong class="d-block mb-2" id="wrapper-time2"></strong>
                          <img id="wrapper-icon-hour2" src="" class="" alt="" />
                          <strong class="d-block" id="wrapper-hour2"></strong>
                        </div>
          
                        <div class="col-2">
                          <strong class="d-block mb-2" id="wrapper-time3"></strong>
                          <img id="wrapper-icon-hour3" src="" class="" alt="" />
                          <strong class="d-block" id="wrapper-hour3"></strong>
                        </div>
          
                        <div class="col-2">
                          <strong class="d-block mb-2" id="wrapper-time4"></strong>
                          <img id="wrapper-icon-hour4" src="" class="" alt="" />
                          <strong class="d-block" id="wrapper-hour4"></strong>
                        </div>
          
                        <div class="col-2">
                          <strong class="d-block mb-2" id="wrapper-time5"></strong>
                          <img id="wrapper-icon-hour5" src="" class="" alt="" />
                          <strong class="d-block" id="wrapper-hour5"></strong>
                        </div>
                      </div>
                    </div>
          
                    <!-- Daily forecast -->
                    <div class="card-body px-5">
                      <div class="row align-items-center">
                        <div class="col-lg-6">
                          <strong>Today</strong>
                        </div>
          
                        <div class="col-lg-2 text-center">
                          <img id="wrapper-icon-today" src="" class="w-100" alt="" />
                        </div>
          
                        <div class="col-lg-4 text-end">
                          <span id="wrapper-forecast-temp-today"></span>
                        </div>
                      </div>
          
                      <div class="row align-items-center">
                        <div class="col-lg-6">
                          <strong>Tomorrow</strong>
                        </div>
          
                        <div class="col-lg-2 text-center">
                          <img id="wrapper-icon-tomorrow" src="" class="w-100" alt="" />
                        </div>
          
                        <div class="col-lg-4 text-end">
                          <span id="wrapper-forecast-temp-tomorrow">28</span>
                        </div>
                      </div>
          
                      <div class="row align-items-center">
                        <div class="col-lg-6">
                          <strong>Day after tomorrow</strong>
                        </div>
          
                        <div class="col-lg-2 text-center">
                          <img id="wrapper-icon-dAT" src="" class="w-100" alt="" />
                        </div>
          
                        <div class="col-lg-4 text-end">
                          <span id="wrapper-forecast-temp-dAT">28</span>
                        </div>
                      </div>
                    </div>
                  </div>
          
                </div>
              </div>
          
            </div>
`
}