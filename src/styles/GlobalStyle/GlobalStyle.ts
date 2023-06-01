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
h4,
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
}

.burguer-menu{
  width: 35px;
  height: 35px;
}

.dropdown-toggle{
  height: 100%;
}

`;

export default GlobalStyle;
