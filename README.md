# 06 Server-Side APIs: Weather Dashboard

## Your Task

Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

Use the [OpenWeather One Call API](https://openweathermap.org/api/one-call-api) to retrieve weather data for cities. Read through the documentation for setup and usage instructions. You will use `localStorage` to store any persistent data. For more information on how to work with the OpenWeather API, refer to the [Full-Stack Blog on how to use API keys](https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys).

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```
## Screenshots

![screencapture-127-0-0-1-5500-index-html-2021-10-17-00_44_31](https://user-images.githubusercontent.com/89287787/137612260-ba02a5a3-bc92-4901-a5e5-1e8f490bb067.png)


![screencapture-127-0-0-1-5500-index-html-2021-10-17-00_45_09](https://user-images.githubusercontent.com/89287787/137612267-cb9a3042-6232-4369-9ec0-da6c72598a87.png)


![screencapture-127-0-0-1-5500-index-html-2021-10-17-00_46_18](https://user-images.githubusercontent.com/89287787/137612271-dc6886cc-ff03-4f28-bfab-c85f5225a354.png)
