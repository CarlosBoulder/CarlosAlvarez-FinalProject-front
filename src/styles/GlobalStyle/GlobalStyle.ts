import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,
::before,
::after {
  box-sizing: border-box;
}

html {
  font-family: "montserrat", sans-serif;
}

body {
  margin: 0;
}

h1,
h2,
h3,
h5,
h6,
p {
  margin: 0;
  font: inherit;
}

h1{
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
}

h4{
  margin: 0;
  font: inherit;
  text-align: center;
}

ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

button {
  font: inherit;
  border: none;
  cursor: pointer;
}

.pagination-button{
  font: inherit;
  border: none;
  background-color: #FFEC00;
  width: 70px;
  height: 40px;
  border-radius: 5px;
}

input {
  font: inherit;
  border: 2px solid;
  padding: 10px;
}

a {
  text-decoration: none;
  color: inherit;
}

.btn-primary {
    font-family: "montserrat";
    background-color: #FFEC00;
    color: #000;
    border-color: #FFEC00;
    --bs-btn-disabled-bg: #6C757D;
    --bs-btn-disabled-border-color: #6C757D;
}

.burguer-menu{
  width: 35px;
  height: 35px;
}

.dropdown-toggle{
  height: 100%;
}

.card-button{
  background-color: white;
}

.ms-3{
    display: flex;
    gap: 10px;
    margin: 0;
    justify-content: space-evenly;
    align-items: center;
}

`;

export default GlobalStyle;
