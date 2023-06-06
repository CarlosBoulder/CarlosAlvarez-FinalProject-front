# BoulderLab

BoulderLab is an app where you can access a list of boulders around the world. You can also manage the list adding, updating and removing them once you are logged in.

# Tech stack

-TypeScript

-React

-Redux Toolkit

-Styled components

-Axios

-MSW

-Jest & Vite

-React testing library

# Demo

https://carlos-alvarez-final-project-front-23.netlify.app/

# Author

https://github.com/CarlosBoulder

# EndPoints

**_GET https://carlos-alvarez-final-project-back-202304.onrender.com/ping_**

Verify status api

Return:

"message": "🏓 Pong"

**_POST https://carlos-alvarez-final-project-back-202304.onrender.com/user/login_**

User credentials verification to get valid token

Body:

`{ "username":"admin", "password":"admin" }`

Return:

`{
    "token": "eyJhbGciOiJIUz..."
}`

**_GET https://carlos-alvarez-final-project-back-202304.onrender.com/boulders/all_**

Get all boulders

Authorization: Bearer Token

Return:

`{
    "boulders": [
        {
            "img": "imageurl",
            "name": "Rema remero",
            "crag": "Techos",
            "grade": "7A",
            "description": "Sit start from small crimps",
            "country": "Spain",
            "spot": "Albarracín",
            "id": "6470ddcd54aeae925d46d8d6"
        }
    ]
}`

# Boilerplate for React apps

With Vite + TypeScript

## Scripts

`npm run dev`: starts a development server

`npm run build`: builds the app

`npm run preview`: runs the built app

`npm run lint`: runs ESLint
