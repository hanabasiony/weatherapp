var arr = []
var locArr = []


fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        console.log("Your IP Address is: ", data.ip);
        locApi(data.ip)
    })
    .catch(error => console.error("Error fetching IP: ", error));




function locApi(locationIP) {
    var loc = new XMLHttpRequest()
    loc.open('GET', `https://apiip.net/api/check?ip=${locationIP}&accessKey=cb6c1c43-44e8-43cd-99ea-84b7870513cf`)
    loc.send()
    loc.addEventListener('readystatechange', function () {
        if (loc.readyState === 4 && loc.status >= 200 && loc.status < 300) {
            locArr = JSON.parse(loc.response)
            console.log(locArr.countryName);
            reqFirstOpenWeather()
        }
    })

}


function reqFirstOpenWeather() {
    var req2 = new XMLHttpRequest();
    req2.open('GET', `https://api.weatherapi.com/v1/forecast.json?key=5fc99c2a45c347e89a5213819240712&q=${locArr.countryName}&days=3`)
    req2.send()
    req2.addEventListener('readystatechange', function () {
        if (req2.readyState === 4 && req2.status >= 200 && req2.status < 300) {
            arr = JSON.parse(req2.response)

            displayCard1()
            displayCard2()
            displayCard3()
            diplayHeader1()
            displayHeader2()
            displayHeader3()
        }
    })

}

var inputSearch = document.querySelector('.input-search')
var inputSearchValue = ''


inputSearch.addEventListener('keyup', function (){
    var req = new XMLHttpRequest();
    inputSearchValue = inputSearch.value
    console.log(inputSearchValue);
    req.open('GET', `https://api.weatherapi.com/v1/forecast.json?key=5fc99c2a45c347e89a5213819240712&q=${inputSearchValue}&days=3`)
    req.send()
    req.addEventListener('readystatechange', function () {
        if (req.readyState === 4 && req.status >= 200 && req.status < 300) {
            arr = JSON.parse(req.response)

            displayCard1()
            displayCard2()
            displayCard3()
            diplayHeader1()
            displayHeader2()
            displayHeader3()
        }
    })

})


function displayCard1() {
    console.log(arr)
    var cartona1 = ''

    cartona1 = `
    <div class="location">
                  <h5>
                  ${arr.location.name}
                  </h5>
                </div>
                <div class="deg">
                  ${arr.forecast.forecastday[0].day.maxtemp_c}<span>°C</span>
                </div>

                <div class="forcast-icon">
                  <img src="https:${arr.forecast.forecastday[0].day.condition.icon}" class="">
                </div>

                <div class="staus">
                ${arr.forecast.forecastday[0].day.condition.text}
                </div>

                <div class="wind-box d-flex justify-content-start gap-4 align-items-center mt-5">
                  <div class="cont d-flex justify-content-center align-items-center">
                    <img src="./img/icon-umberella.png" alt="">
                    <p class="rain ms-1">20%</p>
                  </div>
                  <div class="cont d-flex justify-content-center align-items-center">
                    <img src="./img/icon-wind.png" alt="">
                    <p class="wind  ms-1">${arr.forecast.forecastday[0].day.maxwind_kph}km</p>
                  </div>
                  <div class="cont d-flex justify-content-center align-items-center">
                    <img src="./img//icon-compass.png" alt="">
                    <p class="compas  ms-1">east</p>
                  </div>

                </div>

    `

    document.querySelector('.body-1 .inner').innerHTML = cartona1
}
function displayCard2() {
    console.log(arr)
    var cartona2 = ''
    // cartona2 = `
    //     <div class="inner d-flex flex-column justify-content-center align-items-center w-100 mt-5">
    //         <div class="img-cont">
    //           <img src="https:${arr.forecast.forecastday[1].day.condition.icon}" alt="">
    //         </div>

    //         <p class="big-degree">
    //           ${arr.forecast.forecastday[1].day.maxtemp_c}<span>°C</span>
    //         </p>

    //         <p class="small-degree">
    //           ${arr.forecast.forecastday[1].day.mintemp_c}<span>°C</span>
    //         </p>

    //         <p class="status">
    //         ${arr.forecast.forecastday[1].day.condition.text}
    //         </p>
    //       </div>
    //     `
    cartona2 = `
        <div class="inner d-flex flex-column justify-content-center align-items-center w-100 ">
                <div class="img-cont">
                  <img src="https:${arr.forecast.forecastday[1].day.condition.icon}" alt="">
                </div>

                <p class="big-degree">
                  ${arr.forecast.forecastday[1].day.maxtemp_c}<span>°C</span>
                </p>

                <p class="small-degree">
                 ${arr.forecast.forecastday[1].day.mintemp_c}<span>°C</span>
                </p>

                <p class="status">
                ${arr.forecast.forecastday[1].day.condition.text}
                </p>
              </div>
        `

    document.querySelector('.body-2').innerHTML = cartona2
}
function displayCard3() {
    console.log(arr)
    var cartona3 = ''
    // cartona3 = `
    //     <div class="inner d-flex flex-column justify-content-center align-items-center w-100 mt-5">
    //         <div class="img-cont">
    //           <img src="https:${arr.forecast.forecastday[2].day.condition.icon}" alt="">
    //         </div>

    //         <p class="big-degree">
    //           ${arr.forecast.forecastday[2].day.maxtemp_c}<span>°C</span>
    //         </p>

    //         <p class="small-degree">
    //           ${arr.forecast.forecastday[2].day.mintemp_c}<span>°C</span>
    //         </p>

    //         <p class="status">
    //         ${arr.forecast.forecastday[2].day.condition.text}
    //         </p>
    //       </div>
    //     `
        cartona3 =`
        <div class="inner d-flex flex-column justify-content-center align-items-center w-100 ">
                <div class="img-cont">
                  <img src="${arr.forecast.forecastday[2].day.condition.icon}" alt="">
                </div>

                <p class="big-degree">
                 ${arr.forecast.forecastday[2].day.maxtemp_c}<span>°C</span>
                </p>

                <p class="small-degree">
                  ${arr.forecast.forecastday[2].day.mintemp_c}<span>°C</span>
                </p>

                <p class="status">
                ${arr.forecast.forecastday[2].day.condition.text}
                </p>
              </div>
        `

    document.querySelector('.body-3').innerHTML = cartona3
}
function diplayHeader1() {
    const dateString = arr.forecast.forecastday[0].date
    const date = new Date(dateString);
    const dayOfWeekNumber = date.getDay();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeekName = daysOfWeek[dayOfWeekNumber];
    console.log(dayOfWeekName);

    document.querySelector('.first-day').innerHTML = `
     <h3>${dayOfWeekName}</h3>
     <h3>${arr.current.last_updated}</h3>
    `
}
function displayHeader2() {

    const dateString = arr.forecast.forecastday[1].date
    const date = new Date(dateString);
    const dayOfWeekNumber = date.getDay();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeekName = daysOfWeek[dayOfWeekNumber];
    console.log(dayOfWeekName);

    document.querySelector('.sec-day').innerHTML = `
     <h3>${dayOfWeekName}</h3>
    
    `
}
function displayHeader3() {

    const dateString = arr.forecast.forecastday[2].date
    const date = new Date(dateString);
    const dayOfWeekNumber = date.getDay();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeekName = daysOfWeek[dayOfWeekNumber];
    console.log(dayOfWeekName);

    document.querySelector('.third-day').innerHTML = `
     <h3>${dayOfWeekName}</h3>
    
    `
}
