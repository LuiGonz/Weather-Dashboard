let currentDay = moment().format("MMMM Do YYYY, h:mm a");
let historySrch = JSON.parse(localStorage.getItem("history-search")) || [];

document.querySelector("#search-button").addEventListener("click", function(){
    let inputSrch = document.querySelector("#input-search").value;
    weatherSearch(inputSrch);
    saveSearch(inputSrch);
})

document.querySelector("#search-history-list").addEventListener("click", (event) => {
    let newSrchInput = jQuery(event.target).text();
    weatherSearch(newSrchInput);
})

function weatherSearch(input) {
    jQuery("#todays-weather").empty();
    let linkAPI = "https://api.openweathermap.org/data/2.5/weather?q="+input+"&appid=bbf0710aea063cb777e765eed63b4ebb&units=imperial";
    fetch(linkAPI).then(response => {return response.json()}).then(data => {
        let cityName,temp,wind,humidity,icon;
        cityName = jQuery("<h2>").addClass("city-name").attr("style","color: gold;").text(data.name + " - " + currentDay);
        let iconLink = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
        icon = jQuery('<img>').attr('src',iconLink).attr("style","width: 100px; height: 100px;")
        temp = jQuery("<p>").text("Temp: " + data.main.temp + "℉");
        wind = jQuery("<p>").text("Wind: " + data.wind.speed + "MPH");
        humidity = jQuery("<p>").text("Humidity: " + data.main.humidity + "%");
        jQuery("#todays-weather").append(cityName,icon,temp,wind,humidity);    
        let lat = data.coord.lat;
        let lon = data.coord.lon;
        weatherLatLon(lat,lon);
    })
}

function weatherLatLon(lat,lon) {
    jQuery("#cards-five-days").empty();
    jQuery('#title-five-days').empty();
    let linkAPI = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&appid=bbf0710aea063cb777e765eed63b4ebb&units=imperial"
    fetch(linkAPI).then(response => {return response.json()}).then(data => {
        let indexUV = data.current.uvi;
        let elemIndexUV = jQuery("<p>").text("UV Index: " + indexUV);
        switch (true) {
            case (indexUV < 3):
                elemIndexUV.addClass("low");
            break;
            case (indexUV > 2 && indexUV < 6):
                elemIndexUV.addClass("moderate");
            break;
            case (indexUV > 5 && indexUV < 8): 
                elemIndexUV.addClass("high");
            break;
            case (indexUV > 7 && indexUV < 11):
                elemIndexUV.addClass("very-high");
            break;
            default: 
                elemIndexUV.addClass("extreme");
            break;
        }

        jQuery("#todays-weather").append(elemIndexUV).attr("style","border: 2px solid aqua");

        let divHeader = $("<h3>").addClass("forecast-title").text("5 Day Forecast:")
        jQuery("#title-five-days").append(divHeader);
        for (let i = 1; i < (data.daily.length-2); i++) {
            let temp = jQuery("<p>").addClass("card-text").text("Temp: " + data.daily[i].temp.day + "℉");
            let wind = jQuery("<p>").addClass("card-text").text("Wind: " + data.daily[i].wind_speed + "MPH");
            let humidity = jQuery("<p>").addClass("card-text").text("Humidity: " + data.daily[i].humidity + "%");
            let iconLink = "http://openweathermap.org/img/wn/" + data.daily[i].weather[0].icon + "@2x.png";
            let icon = jQuery('<img>').attr('src',iconLink).attr("style","width: 80px; height: 80px;")
            let cardBody = jQuery("<div>").addClass("card-body");
            let cardDiv = jQuery("<div>").addClass("card mb-1.5").attr("style","width: 12em;");
            let date = moment().add(i,"days").format("MMM Do, YYYY");
            let cardDate = jQuery("<h5>").addClass("card-title").text(date);
            jQuery(cardBody).append(cardDate,icon,temp,wind,humidity);
            jQuery(cardDiv).append(cardBody);
            jQuery("#cards-five-days").append(cardDiv);
        }
    })
}

function saveSearch(inputSrch) {
    switch (true) {
        case (!historySrch.includes(inputSrch)):
                let searchButton = jQuery("<button>")
                    .addClass("list-group-item list-group-item-action")
                    .attr("style","width:13.3rem").text(inputSrch);
                jQuery("#search-history-list").append(searchButton);
                historySrch.push(inputSrch);
	    break;
        default:
            return;
    }
    localStorage.setItem("history-search",JSON.stringify(historySrch));
}

function init() {
    let savedHistory = JSON.parse(localStorage.getItem("history-search")) || [];
    switch (savedHistory) {
        case null:
            return;
        default:
            for (let i = 0; i < savedHistory.length; i++) {
                let searchButton = $("<button>")
                    .addClass("list-group-item list-group-item-action historyBtn p-2")
                    .attr("style","width:13.3rem").text(savedHistory[i]);
                jQuery("#search-history-list").append(searchButton);
            }
        break;
    }
} init();