import { createGlobalStyle } from "styled-components";

const GlobalStyes = createGlobalStyle`


* {
	box-sizing: border-box;
}

body {
	width: 100%;
	height: 100vh;
	margin: 0;
	font-family: Poppins, sans-serif;
background-color: #fdfdfd;
}

h1 {
	font-size: 2rem;
	margin: 0.67em 0;
}

a {
	 background-color: transparent;
	 text-decoration: none;
	 /* color: red; */
}

a:active {
	color: blue;
}

a:link {
	color: black;
}

a:visited {
	color: black;
}

img {
	/* width: 100%; */
	border-style: none;
}

input {
	border: none;
}

button {
	cursor: pointer;
background-color: transparent;
border: none;
        box-shadow: none;

}

select {
	width: 10rem;
	height: 2rem;
	border: 2px solid blue;
	background-color: white;
	border-radius: 0.3rem;
	padding-left: 0.5rem;
	font-size: .9rem;
}


.addStudentBtn, .sendRecordBtn {
    padding: 1rem;
    width: 60%;
    background-color: rgb(33, 150, 243);
    border-radius: 0.3rem;
    color: white;
    font-size: 1.3rem;
    font-weight: 700;
    cursor: pointer;
  }

`;

export default GlobalStyes;
