![main-image](./src/client/static/travel.svg)
# Contents
- [Contents](#contents)
- [Badges](#badges)
- [Environment variables](#environment-variables)
- [Pages](#pages)
  - [Welcome page](#welcome-page)
  - [Home page](#home-page)
  - [Explore pages](#explore-pages)
    - [Search results](#search-results)
  - [City overview](#city-overview)
    - [Trip confirmation page](#trip-confirmation-page)
  - [Planned](#planned)
  - [History](#history)
  - [Saved](#saved)
- [Commands](#commands)
  - [```Install```](#install)
  - [```Editing```](#editing)
  - [```Scripts```](#scripts)
    - [```npm start```](#npm-start)
    - [```npm run start:client```](#npm-run-startclient)
    - [```npm run build:dev```](#npm-run-builddev)
    - [```npm run build:prod```](#npm-run-buildprod)
    - [```npm run test```](#npm-run-test)
    - [```npm run test:watch```](#npm-run-testwatch)
- [Technologies](#technologies)
  - [Frontend](#frontend)
    - [HTML](#html)
    - [SCSS](#scss)
    - [Javascript](#javascript)
  - [Backend](#backend)
- [API](#api)
  - [```/trips```](#trips)
  - [```/saved-trips```](#saved-trips)
  - [```/last-trip```](#last-trip)
  - [```/city-search?q=search```](#city-searchqsearch)
  - [```/image?q=search```](#imageqsearch)
  - [```/weather?long&lat```](#weatherlonglat)
  - [```/get-location?q=search```](#get-locationqsearch)
  - [```/save-location```](#save-location)
  - [```/save-trip```](#save-trip)
- [Design](#design)
- [Credits](#credits)
- [License](#license)

# Badges
![submission](https://img.shields.io/badge/submission-pending-orange)
![issues](https://img.shields.io/github/issues/Diorla/trip-planner)
![license](https://img.shields.io/github/license/Diorla/trip-planner)
![code size](https://img.shields.io/github/languages/code-size/diorla/trip-planner)
![forks](https://img.shields.io/github/forks/Diorla/trip-planner)
![stars](https://img.shields.io/github/stars/Diorla/trip-planner)
![programming languages](https://img.shields.io/github/languages/count/diorla/trip-planner)
![top language](https://img.shields.io/github/languages/top/diorla/trip-planner)
![commit status](https://img.shields.io/github/commit-status/diorla/trip-planner/main/HEAD)
![Package version](https://img.shields.io/github/package-json/v/diorla/trip-planner)
![Last commit](https://img.shields.io/github/last-commit/diorla/trip-planner)
![Commit activity](https://img.shields.io/github/commit-activity/w/diorla/trip-planner)

# Environment variables
```sh
geonameUser="diorla"
weatherAPI="ee1d1e9cd49348eb8034ceb32f8779fd"
PIXABAY="8589248-e5a9c8ca78fc229c4a42ae023"
```

# Pages

## Welcome page

- This is the page for new users
- It will enable them to sign in
- It will be also some sort ads or welcome to the webpage

## Home page

- Basic profile of the user
  - Username
  - Profile picture
  - Stats
    - Joined
    - Trips
    - Saved
  - Background picture
- A call to action button with "Explore", will lead to explore page
- Current trip
  - This will be based on the date.
  - Any date that overlaps with today will be the one
- Next trip: information about the closest upcoming trip
  - If you click it, it will lead to planned or future trips
- Saved
  - last saved trip
  - if you click it it will lead to all saved locations
- History
  - Last trip that you went
  - if you click it, it will lead to your history (all trips you've made)

## Explore pages

- This is where user will search for where they want to go
- It will contain a search button and some suggestion
- If user uses the search for a city (provide at least 3 letters), it will lead to a sub-page, Search results

### Search results

- It will be the top five results of the cities based on the search input
- Provided information will be
  - City name
  - Description
  - Country and Administrative region
  - Longitude and latitude
- Of course, if the page is not found, it will let the user know with an error message and appropriate image

## City overview

- This page is reached when a user clicks any of the cities (in suggestions or search results)
- Here user can bookmark it (add it to save list)
- It will show the next 16 weathers
- It will also show some gallery (about 9 images)
- Here you can add to trip
  - You click visit
  - You provide start and end date
  - This should not overlap with any other trip
  - Once this is done, you can save it

- Once they've saved the trip, they will be lead to trip confirmation page

### Trip confirmation page

- This is a page that shows the info about the trip that the user just confirmed
- There will be some other suggestions to add more cities like that
- A button that leads home



## Planned

- It will show the list of trips that they are planning
- It will show the name of the city, the label, start and end date
- It will be sorted from the closest to the furthest in the future

## History

- Basically like planned page
- Will be sorted from the most recent

## Saved

- This will be the list of cities, similar to search results
- There will also be date and time that it was saved
- Clicking any one of them will lead to city overview


# Commands

## ```Install```

Clone the repo
```sh
git clone https://github.com/Diorla/trip-planner
```
Create `.env` file
Add the following to the `.env` file
```sh
geonameUser="diorla"
weatherAPI="ee1d1e9cd49348eb8034ceb32f8779fd"
PIXABAY="8589248-e5a9c8ca78fc229c4a42ae023"
```

## ```Editing```
Use any text-editor to update the content

## ```Scripts```

### ```npm start```
To start both server and client.

Opens at localhost:1963

### ```npm run start:client```

start the client only, opens at port 8080

Supports HMR

### ```npm run build:dev```

build client side with dev mode

### ```npm run build:prod```

build client side with production mode

### ```npm run test```

npm run test

### ```npm run test:watch```

npm run test in watch mode


# Technologies
This is divided into frontend and backend

## Frontend
> It can be found inside `src/client/`
### HTML
![HTML](https://img.shields.io/badge/HTML-document-dd4b25)

This is a single html file, `pages/index.html`, where all the initial content is loaded

### SCSS
![SCSS](https://img.shields.io/badge/CSS-style-orange)

These are saved inside `./styles` folders

### Javascript
![JS](https://img.shields.io/badge/JS-language-cfb430)

There is a single root file inside `./client/index.js`. Other js modules are saved inside `./client/js` folders and imported into `./client/index.js`


## Backend
> It can be found inside `src/server/`
The backend is written in `nodejs` and powered by `express.js`. it is found inside `./index.js`. It does the following
- Starts the server
- Handles routing
- Serves the `index.html` file
- Serves other static files
- Accepts `url` from the client side
- Handles connection to API
- Quasi database was created using `JSON` and `fs`

# API
The list of API available for use

## ```/trips```
method: get
returns all trips, present, past and planned.

```json
[
  {
    "start": "2022-04-04",
    "end": "2022-05-04",
    "city": "Abuja",
    "tag": "Safari",
    "id": "1",
    "long": "9.320677",
    "lat": "26.79143"
  }
]
```

## ```/saved-trips```
method: get
Returns the list of bookmarked trips

```json
[
  {
    "name": "London",
    "lat": "51.50853",
    "description": "capital of a political entity",
    "long": "-0.12574",
    "region": "England, United Kingdom",
    "id": 2643743
  }
]
```

## ```/last-trip```
method: get
Returns the last trip that was added

```json
{
  "name": "London",
  "lat": "51.50853",
  "description": "capital of a political entity",
  "long": "-0.12574",
  "region": "England, United Kingdom",
  "id": 2643743
}
```

## ```/city-search?q=search```
method: get
Returns list of trips that matches the search

```json
{
  "totalResultsCount": 107538,
  "geonames": [
    {
      "adminCode1": "00",
      "lng": "29.35708",
      "geonameId": 980611,
      "toponymName": "Mafadi",
      "countryId": "953987",
      "fcl": "T",
      "population": 0,
      "countryCode": "ZA",
      "name": "Mafadi",
      "fclName": "mountain,hill,rock,... ",
      "countryName": "South Africa",
      "fcodeName": "mountain",
      "adminName1": "",
      "lat": "-29.20233",
      "fcode": "MT"
    }
  ]
}
```

## ```/image?q=search```
method: get
Returns list of images that matches the location or not-found

```json
{
"total": 4692,
"totalHits": 500,
"hits": [
    {
      "id": 195893,
      "pageURL": "https://pixabay.com/en/blossom-bloom-flower-195893/",
      "type": "photo",
      "tags": "blossom, bloom, flower",
      "previewURL": "https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg"
      "previewWidth": 150,
      "previewHeight": 84,
      "webformatURL": "https://pixabay.com/get/35bbf209e13e39d2_640.jpg",
      "webformatWidth": 640,
      "webformatHeight": 360,
      "largeImageURL": "https://pixabay.com/get/ed6a99fd0a76647_1280.jpg",
      "fullHDURL": "https://pixabay.com/get/ed6a9369fd0a76647_1920.jpg",
      "imageURL": "https://pixabay.com/get/ed6a9364a9fd0a76647.jpg",
      "imageWidth": 4000,
      "imageHeight": 2250,
      "imageSize": 4731420,
      "views": 7671,
      "downloads": 6439,
      "likes": 5,
      "comments": 2,
      "user_id": 48777,
      "user": "Josch13",
      "userImageURL": "https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg",
    },
    ...
  ]
}
```

## ```/weather?long&lat```
method: get
Returns 7 day weather report of the specified longitude and latitude

```json
{
  "timezone": "Atlantic/Azores",
  "state_code": "23",
  "country_code": "PT",
  "lat": 31.0292,
  "lon": -29.8579,
  "city_name": "Ribeira Grande",
  "station_id": "085150-99999",
  "data": [
    {
      "rh": 88.2,
      "max_wind_spd_ts": 1646229600,
      "t_ghi": 5320.3,
      "max_wind_spd": 9.3,
      "solar_rad": 80.6,
      "wind_gust_spd": 9.3,
      "max_temp_ts": 1646218800,
      "min_temp_ts": 1646265600,
      "clouds": 77,
      "max_dni": 902.4,
      "precip_gpm": 0,
      "wind_spd": 6.3,
      "slp": 1028.9,
      "ts": 1646182800,
      "max_ghi": 772.2,
      "temp": 16.2,
      "pres": 1016.8,
      "dni": 339.7,
      "dewpt": 14.2,
      "snow": 0,
      "dhi": 41.8,
      "precip": 0,
      "wind_dir": 233,
      "max_dhi": 115.3,
      "ghi": 221.7,
      "max_temp": 17,
      "t_dni": 8152.3,
      "max_uv": 2.5,
      "t_dhi": 1003.9,
      "datetime": "2022-03-02",
      "t_solar_rad": 1933.7,
      "min_temp": 13,
      "max_wind_dir": 233,
      "snow_depth": null
    },
    ...
  ],
  "sources": [
    "imerg",
    "merra2",
    "era5",
    "modis"
  ],
  "city_id": "3372707"
}
```

## ```/get-location?q=search```
method: get
Returns information about a single location

```json
{
  "timezone": {
      "gmtOffset": 2,
      "timeZoneId": "Africa/Johannesburg",
      "dstOffset": 2
  },
  "bbox": {
      "east": 31.29298220746991,
      "south": -30.08718995240963,
      "north": -29.62860204759037,
      "west": 30.76541379253009,
      "accuracyLevel": 0
  },
  "asciiName": "Durban",
  "astergdem": 35,
  "countryId": "953987",
  "fcl": "P",
  "srtm3": 21,
  "adminId2": "8299474",
  "adminId3": "8347491",
  "countryCode": "ZA",
  "adminCodes1": {
      "ISO3166_2": "KZN"
  },
  "adminId1": "972062",
  "lat": "-29.8579",
  "fcode": "PPLA2",
  "continentCode": "AF",
  "adminCode2": "ETH",
  "adminCode3": "ETH",
  "adminCode1": "02",
  "lng": "31.0292",
  "geonameId": 1007311,
  "toponymName": "Durban",
  "population": 3120282,
  "wikipediaURL": "en.wikipedia.org/wiki/Durban",
  "adminName5": "",
  "adminName4": "",
  "adminName3": "Ethekwini",
  "alternateNames": [
    {
      "name": "더반",
      "lang": "ko"
    },
    {
      "name": "ደርባን",
      "lang": "am"
    },
  ],
  "adminName2": "eThekwini Metropolitan Municipality",
  "name": "Durban",
  "fclName": "city, village,...",
  "countryName": "South Africa",
  "fcodeName": "seat of a second-order administrative division",
  "adminName1": "KwaZulu-Natal"
}
```

## ```/save-location```
method: post
To add a new location that may be retrieved later. The body should be like below

```json
{
  "name": "London",
  "lat": "51.50853",
  "description": "capital of a political entity",
  "long": "-0.12574",
  "region": "England, United Kingdom",
  "id": 2643743
}
```


## ```/save-trip```
method: post
To add a new trip

```json
{
  "city": "London",
  "lat": "51.50853",
  "description": "capital of a political entity",
  "long": "-0.12574",
  "region": "England, United Kingdom",
  "id": 2643743
}
```


# Design

- Rough mock-up made with adobe XD. The prototype could be found [here](https://xd.adobe.com/view/9ef40253-48c5-4bce-95ac-5e7ffd3e9396-cba7/screen/9d36ab1e-e03b-45c6-9cfc-bba0481d50e7).

# Credits

- Welcome page background image by [kinkate](https://pixabay.com/users/kinkate-4384506/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2031539) from [Pixabay](https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2031539)
- Readme image from [undraw](https://undraw.co/)

# License
This is under [MIT](https://choosealicense.com/licenses/mit/) license, for more details, please check [License](https://github.com/Diorla/trip-planner/blob/main/LICENCE)

[(Back to top)](#contents)