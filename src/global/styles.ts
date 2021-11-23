import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 :root {
    --background: #F7F7F7;
    --red: #EA1D2C;
    --blue: #5429cc;

    --blue-light: #6933FF;

    --text-title: #000000;
    --text-body: #8D8D8D;
  }
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
}

body{
    -webkit-font-smoothing: antialiased;
    background: var(--background);
}
body,input,textarea,button{
    font-family:'Roboto',sans-serif;
}
h1,h2,h3,h4,h5,h6{
color: var(--text-title);
}
p{
    color: var(--text-body);
}
button{
    cursor: pointer;
}

`;
