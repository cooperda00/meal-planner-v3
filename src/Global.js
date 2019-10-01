import { createGlobalStyle } from "styled-components";
import { grays } from "./Utilities";

const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap");

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: "Open Sans", sans-serif;
    }

    *:after, *:before {
        box-sizing: inherit;
    }

    html, body {
        min-height: 100%;
    }

    html {
        font-size: 62.5%;
    }

    a:link, a:visited {
        text-decoration: none;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    li,
    div,
    button,
    a,
    input,
    textarea {
        color: ${grays[6]};
    }
`;

export default GlobalStyle;
