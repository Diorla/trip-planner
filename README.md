![main-image](./src/client/static/travel.svg)
# Contents
- [Contents](#contents)
- [Badges](#badges)
- [Pages](#pages)
  - [Welcome page](#welcome-page)
  - [Drawer](#drawer)
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

# Pages

## Welcome page

- This is the page for new users
- It will enable them to sign in
- It will be also some sort ads or welcome to the webpage

## Drawer

- This is the primary navigation for the webpage
- It will be accessible via the menu or hamburger sign
- It will lead to the following pages
  - Home page
  - Explore
  - History
  - Saved city
  - Planned trips
  - Logout button

## Home page

- Basic profile of the user
  - Username
  - Profile picture
  - Stats
    - Joined
    - Trips
    - Saved
  - Background picture
- A call to action button with "New trip", will lead to explore page
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
```sh
git clone https://github.com/Diorla/trip-planner
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

# Design

- Rough mock-up made with adobe XD. The prototype could be found [here](https://xd.adobe.com/view/9ef40253-48c5-4bce-95ac-5e7ffd3e9396-cba7/screen/9d36ab1e-e03b-45c6-9cfc-bba0481d50e7).

# Credits

- Welcome page background image by [kinkate](https://pixabay.com/users/kinkate-4384506/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2031539) from [Pixabay](https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2031539)
- Readme image from [undraw](https://undraw.co/)

# License
This is under [MIT](https://choosealicense.com/licenses/mit/) license, for more details, please check [License](https://github.com/Diorla/trip-planner/blob/main/LICENCE)

[(Back to top)](#contents)