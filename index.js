const apikey ="b903d0d30c1ba58fe48e46e05ec272b3";
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;


async function getWhetherByLocation(city){
//    const resp =await fetch(url(city),{
//     origin:"cros"
//    });
//    console.log(resp);
//    const resoData = await resp.json();
//    console.log(resoData);
//    addWhetherToPage(resoData);
    
try {
    const resp = await fetch(url(city), { origin: "cros" });
    const resoData = await resp.json();
    addWhetherToPage(resoData);
  } catch (error) {
    search.value='';
    console.log(error);
    alert("Please enter the correct city name");
    
  }
}

// console.log(getWhetherByLocation("india"));

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
    weather.classList.add('weather');
    weather.innerHTML=`
    <h1>${Data.name}<h1>
    <h2>
    <img src="https://openweathermap.org/img/wn/${Data.weather[0].icon}@2x.png"/>
    ${temp}
    <img src="https://openweathermap.org/img/wn/${Data.weather[0].icon}@2x.png"/>
    </h2>
    <small>${Data.weather[0].main}</small>
    `
    main.innerHTML="";
    main.appendChild(weather);
    console.log(main);
    search.value='';

};