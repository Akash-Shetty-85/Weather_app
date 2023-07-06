const apikey = "b903d0d30c1ba58fe48e46e05ec272b3";
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const input2 = document.getElementById("form1");
const searchField = document.getElementById("search-focus");

const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;


async function getWhetherByLocation(city) {

  try {
    const resp = await fetch(url(city), { origin: "cros" });
    const resoData = await resp.json();
    // addWhetherToPage(resoData);
    addWhetherToPage2(resoData)
    searchField.value = '';
  } catch (error) {
    console.log(error);
    alert("Please enter the correct city name");
    searchField.value = '';
  }
}


const KToC = (K) => {
  return Math.floor(K - 273.15);
}

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const city = search.value;

//   try {
//     if (city) {
//       getWhetherByLocation(city);
//     }
//   } catch (error) {
//     alert("Please enter a valid city name.");
//   }
// });

function addWhetherToPage(Data) {
  const temp = KToC(Data.main.temp)
  // const imageLink = ()
  const weather = document.createElement("div");
  weather.classList.add('card');
  weather.innerHTML = `
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
  main.innerHTML = "";
  main.appendChild(weather);
  console.log(main);
  search.value = '';

};

input2.addEventListener('submit', (event) => {
  event.preventDefault();
  const cityCard = searchField.value;
  try {
    if (cityCard) {
      getWhetherByLocation(cityCard);
    }
  } catch (error) {
    alert("Please enter a valid city name.");
  }
})
function addWhetherToPage2(data) {
  console.log(data);
  const tempinC = KToC(data.main.temp)
  const imageLink = generateImageLink(data.weather[0].main)
  console.log(imageLink);
  const cardWeather = document.getElementById("card2")
  cardWeather.innerHTML = `
          <div class="container py-5">
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col-md-9 col-lg-7 col-xl-5">
                <div id="wrapper-bg" class="card text-white bg-image shadow-4-strong"
                    style="background-image: url(${imageLink})">
                    <!-- Main current data -->
                    <div class="card-header p-4 border-0">
                      <div class="text-center mb-3">
                        <p class="h2 mb-1" id="wrapper-name">${data.name}</p>
                        <p class="mb-1" id="wrapper-description">${data.weather[0].description}</p>
                        <p class="display-1 mb-1" id="wrapper-temp">${tempinC}<sup>&deg;</sup>C</p>
                        <span class="">Pressure: <span id="wrapper-pressure">${data.main.pressure} Pa</span></span>
                        <span class="mx-2">|</span>
                        <span class="">Humidity: <span id="wrapper-humidity">${data.main.humidity} g.m<sup>-3</sup></span></span>
                        
                      </div>
                      <div class="text-right mt-5">
                        <p> <i class="fa-solid fa-wind fa-bounce fa-xl"></i> ${data.wind.speed} km/h<p>
                      </div>
                    </div>
                    
                    <!-- Hourly forecast -->
                    <div class ="card-container">
                     <div class='details'>
                           <p class="card-min&max">Max</p>
                           <span class="card-span">${KToC(data.main.temp_max)}<sup>&deg</sup>C</span>
                       </div>
                       <div class='details'>
                       <p class="card-min&max">Min</p>
                       <span class="card-span">${KToC(data.main.temp_min)}<sup>&deg</sup>C</span>
                   </div>
                   </div>
                    
                    </div>
                  </div>
          
                </div>
              </div>
          
            </div>
`
}

function generateImageLink(data){
  console.log(data);
  switch (data) {
    case 'Rain':
      return ('https://giffiles.alphacoders.com/105/105296.gif');
      break;
    case 'Cloudes':
      return 'https://media.giphy.com/media/KwZoSJlvep6Vy/giphy.gif';
      break;
    case 'Drizzle':
      return 'https://media.tenor.com/jOjF9a-DUToAAAAC/rain-drizzle.gif';
      break;
    case 'Clear':
      return 'https://media.giphy.com/media/giXXXHbBrhPyhi5mYo/giphy.gif'
      break
    default:
      return 'https://media.giphy.com/media/KwZoSJlvep6Vy/giphy.gif'
      break;
  }
}