const apikey ="b903d0d30c1ba58fe48e46e05ec272b3";
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;


async function getWhetherByLocation(city){
    
try {
    const resp = await fetch(url(city), { origin: "cros" });
    const resoData = await resp.json();
    console.log(resoData);
    console.log(resoData.weather[0].description);
    addWhetherToPage(resoData);
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
    <h4>${Data.name}</h4>
    <h6>${Data.weather[0].description}</h6>
    <img src="https://openweathermap.org/img/wn/${Data.weather[0].icon}@2x.png" alt="${Data.weather[0].main}"/>
    <h1>${temp}<sup>&deg;</sup>C</h1>
    <div class ="container">
        <div class='details'>
        <p>max</p>
        <span>${KToC(Data.main.temp_max)}<sup>&deg;</sup>C</span>
        </div>
        <div class="details">
        <p>min</p>
        <span>${KToC(Data.main.temp_min)}<sup>&deg;</sup>C</span>
        </div>
    </div>
    
    `
    main.innerHTML="";
    main.appendChild(weather);
    console.log(main);
    search.value='';

};