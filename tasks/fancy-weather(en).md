# fancy-weather

## Task description

Implement a weather app (weather forecast).

### Application structure

The application consists of 4 functional units.

#### Unit 1. Dashboard

- button for changing the background image;
- button to toggle languages;
- button toggle between Fahrenheit and Celsius;
- search input.

#### Unit 2. Today's weather

- name of the town, country name;
- current date: weekday shortcut, date, month(Mon 29 December);
- time: hours and minutes, for instance, 18:11, should be updated every minute;
- current temperature;
- weather description(summary), feels like temperature,wind speed(m/s), humidity(%);
- weather icon;

#### Unit 3. Weather forecast for 3 days

- weekday;
- average temperature;
- weather icon.

#### Unit 4. Geolocation data

- coordinates of user's location - latitude, longitude(in degrees and minutes);
- location map.

Application design is up to you.

Layout example:
![Screenshot](images/fancy-weather.png)

[Figma Markup](https://www.figma.com/file/3aQwTNcZWg5CTuvlQ1t5MQ/fancy-weather?node-id=0%3A1)

### Examples

- https://deadline2020-fancy-weather.netlify.com/
- https://fancy-weather-lhk.surge.sh/
- https://my-fancy-weather.netlify.com/

## User story

- when the user opens the application, all the data on the page should correspond to current user location;
- Search input should perform the search by the location name;
- Page background changes after reload or after a button click on the dashboard
  - background images should be generated taking in the consideration season, time of the day, current weather, country, name of the location(two last ones are not necessary);
- Settings for the very first app run: language - English, the temperature in Celsius
  - language toggle button should change language of the page(English, Georgian/Polish);
  - The temperature toggle button should change temperature units (°C/°F);
  - user's preferences should be stored in the local storage.
- Voice control:
  - Recommended code phrases:
    - voice the weather forecast: "weather", "forecast"
    - volume up: "louder"
    - volume down: "quieter"
  - it is ok to implement one phrase for each control
  - if other phrases are used, the using combinations should be provided in an appropriate checking place

### Technical requirements

- the application should work in the latest Chrome version;
- you can use CSS preprocessors, Bootstrap, Material Design, lodash.js;
- you cannot use jQuery and other JS libraries;
- Angular/React/Vue are forbidden.

## Evaluation criteria

**Max score for the task - 280 points.**

### Basic scope +80

- Page layout should be adaptive or responsive - **20 points**
  - min page width - 320 px;
- the 2nd unit renders data related to the current user location - **20 points**;
- the 3rd unit displays weather forecast for 3 upcoming days, corresponding to the current user location - **20 point**;
- the 4th unit shows geolocation data, corresponding to the current user location( latitude, longitude, map) - **20 points**;

### Advanced scope +80/+130

- should be updated according to a new location, including date and time - **60 points**;
- the background image should change after the page reloads or user clicks on the toggle image button - **20 points**;
- implementation of the toggle between temperature units - **10 points**;
- code requirements are fulfilled - **30 points** (can be evaluated by mentor only)
  - html-elements generated in js;
  - js code split for modules;
  - webpack was used;
  - editorconfig, eslint, eslint-config-airbnb-base, babel were used;

### Hacker scope +90

- implemented voice search by the location name -**20 points**;
- code covered with unit tests - 2 points per test, ceiling - **20 points**(max - 10 tests) (can be evaluated by mentor only);
- localisation(translate) of the page (English, Georgian/Polish) - **20 points**;
- Bonus points for the code/feature quality - **20 points**(can be evaluated by mentor only)
- buttons, icons in the application are animated, animations are implemented via @keyframes;
- custom features/elements not described higher was implemented.

### Fines

- errors in the console - **minus 10 points**;
- API keys used in the application are the same as ones in the task description, not personally generated keys - **minus 10 points**(can be evaluated by mentor only)
- less than 6 commits, incorrect commit names, mistakes in a pull request - **minus 10 points**(can be evaluated by mentor only)

### Cross-check

The maximum amount of points that can be suggested by a student - **210**.
The score will be aligned using coefficient 0.3.

##### The evaluating algorithm for the cross-check:

1. in case if the requirement was met 100% - **100% points**;
2. in case of functionality was implemented with major issues(which can not be a feature) - **50%** of the total amount of points for this particular functionality;
3. functionality was not implemented - **0 points**;
4. if the functionality cannot be implemented partially, only two options are available - **100% or 0**.

##### Example

- the layout of the page was implemented as adaptive or responsive - **20 points**;
- if layout breaks on the screen width 320px-440(in case of adaptive layout part of the components might be hidden for a resolution less then desktop) - **10 points**;
- the layout of the application neither responsive or adaptive - **0 points**;

#### Example

- the search was implemented - **60 points**;
- map || date || forecast for today || forecast for three days || location coordinates do not update after the search - **3 points**;
- the search wasn't implemented - **0 points**;

#### Example

- background changes after the page reloads - **10 points**;
- the background does not change after the page reloads - **0 points**;

In the case of non-critical defects, the number of points will be calculated to a student advantage.

### Key skills

- working with API,
- fetching asynchronous data.

<details> 
  <summary>Examples of asynchronous request</summary>
  
  <p></p>
  
  JS-code to get a link to the image (the link displays in the console)
  
  - using fetch
  
 ``` javascript 
  function getLinkToImage() {
  const url = 'https://api.unsplash.com/photos/random?query=morning&client_id=e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17';
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data.urls.regular)
    });
  }
``` 
  - using async/await
  
 ``` javascript 
  async function getLinkToImage() {
    const url = 'https://api.unsplash.com/photos/random?query=morning&client_id=e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17';
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.urls.regular)
  }
```

</details>

<details> 
  <summary>Useful links</summary>
  
- **Fetch/async/await**
  - [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
  - [Async programing](https://www.youtube.com/watch?v=GuQuWsX3S8w&list=PLzLiprpVuH8e1YNSEXMtjOuB1uxqQLYED&index=22)
  - [JavaScript Fetch API and using Async/Await](https://dev.to/shoupn/javascript-fetch-api-and-using-asyncawait-47mp)

- **Date and time**

  - [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
  - [Date.prototype.toLocaleString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)

- **Voice recognition in browser**

  - [SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)
  - [JavaScript Speech Recognition](https://www.youtube.com/watch?v=0mJC0A72Fnw)
  - [SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)
  - [JavaScript Text-To-Speech](https://www.youtube.com/watch?v=saCpKH_xdgs)

- **Weather API**

  - [How to Make a Weather App Using React](https://medium.com/@leizl.samano/how-to-make-a-weather-app-using-react-403c88252deb)

- **Иконки погоды**
  - [Animated SVG Weather Icons](https://codepen.io/atiyahaider/pen/XwmPxq?editors=1100)
  - [Animated Weather Icons](https://codepen.io/irinainina/pen/ZEYORmy)
  - [Free animated SVG weather icons](https://www.amcharts.com/free-animated-svg-weather-icons/)
  - [Free to use animated weather icons](https://github.com/basmilius/weather-icons/tree/master/design/fill/animation-ready)
  - [Icons from Figma](https://wxeka.mrmarkel.com/pws/css/icons/)
  - [owfont - symbol font for Open Weather Map API](https://websygen.github.io/owfont/)
  - [ClimaCell-API weather icons](https://github.com/ClimaCell-API/weather-code-icons)
  </details>

<details> 
  <summary>Using API(with examples)</summary>

<p></p>

**1. Geolocation API**

- https://ipinfo.io/
  - sign up
  - get token
  - get current user location  
    `https://ipinfo.io/json?token=eb5b90bb77d46a`
  - [API Docs](https://ipinfo.io/developers)
- [Geolocation API](https://developer.mozilla.org/ru/docs/Web/API/Geolocation/getCurrentPosition)

**2. Weather API**  
OpenWeatherMap, Weatherbit, AccuWeather, Weather2020 и др.

- https://openweathermap.org/
  - sign up
  - get API Key  
    `https://home.openweathermap.org/api_keys`
  - get weather forecast data for the next five days
    `https://api.openweathermap.org/data/2.5/forecast?q=Kiev&lang=ua&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27`
  - [API Docs](https://openweathermap.org/api)
- https://www.weatherbit.io (500 запросов/сутки)
  - sign up
    `https://www.weatherbit.io/account/create`
  - join your personal account
    `https://www.weatherbit.io/account/login`
  - choose the plan Free
  - copy API key from API Keys / Admin
  - get weather forecast data for the next 3 days
    `https://api.weatherbit.io/v2.0/forecast/daily?city=Moscow&country=RU&days=3&units=S&lang=be&key=619b6dd131094859b162bb2577321b2a`
  - [API Docs](https://www.weatherbit.io/api)
- https://www.weatherapi.com (20000 запросов/месяц)
  - sign up
    `https://www.weatherapi.com/signup.aspx`
  - confirm email (follow the link sent to your email)
  - join your personal account
    `https://www.weatherapi.com/login.aspx`
  - copy API key
  - get weather forecast data for the next 3 days
    `https://api.weatherapi.com/v1/forecast.json?key=363474e96d194f10ab9212718201105&q=Moscow&days=3`
  - [API Docs](https://www.weatherapi.com/docs/)
- https://www.climacell.co/ (1000 запросов/сутки)
  - sign up
    `https://developer.climacell.co/sign-up`
  - confirm email (follow the link sent to your email)
  - join your personal account  
    `https://developer.climacell.co/sign-in`
  - copy API key
  - get weather forecast data for the next several days
    `https://api.climacell.co/v3/weather/forecast/daily?lat=55.7522&lon=37.6156&unit_system=si&start_time=now&fields=feels_like%2Ctemp%2Chumidity%2Cwind_speed%2Cweather_code&apikey=rh8L0roTYDgi9hvbGsd6X3cu5rRWiV05`
  - [API Docs](https://developer.climacell.co/v3/docs)

**3. Images API**

- https://unsplash.com/developers
  - sign up
  - confirm email (follow the link sent to your email)
  - create an application
    `https://unsplash.com/oauth/applications`
  - get Access Key
  - get an image for the background, which should be updated every time the page reloads
    `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17`
  - the service has a limitation - 50 images per hour
  - [API Docs](https://unsplash.com/documentation)
- https://www.flickr.com/services/ - sign up - confirm email (follow the link sent to your email) - create an application `https://www.flickr.com/services/apps/create/apply/` - get API Key - get images `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=0f15ff623f1198a1f7f52550f8c36057&tags=nature,spring,morning&tag_mode=all&extras=url_h&format=json&nojsoncallback=1` - [API Docs](https://www.flickr.com/services/api/) - [The Flickr
  Developer Guide](https://www.flickr.com/services/developer/api/) - Still have questions? Check out [code.flickr.com](https://code.flickr.net/) or the [FAQs](https://help.flickr.com/)! - example with API API Flickr [demo](https://flickr-api-test.netlify.com/)
  _Attention_ Flickr API is a huge and not always easy to work with

**4. Maps API**  
Google Maps API, API Yandex maps, MapBox, OpenStreetMap и др.

- https://www.mapbox.com
  - sign up  
    `https://account.mapbox.com/auth/signup/`
  - confirm email (follow the link sent to your email)
  - get Access token  
    `https://account.mapbox.com/`
  - choose design
    `https://docs.mapbox.com/mapbox-gl-js/examples/`
  - [API Docs](https://docs.mapbox.com/api/maps/)

**5. Geocoding API**  
Google Geocoding, Яндекс.Карты Geocoder, Nominatim OpenStreetMap, Data Science Toolkit, Gisgraphy, OpenCage Geocoder и др.

- https://opencagedata.com/
  - sign up
  - get API key
  - get coordinated by the name of the location
    `https://api.opencagedata.com/geocode/v1/json?q=Minsk&key=c6b6da0f80f24b299e08ee1075f81aa5&pretty=1&no_annotations=1`
  - [API Docs](https://opencagedata.com/api)
    </details>
