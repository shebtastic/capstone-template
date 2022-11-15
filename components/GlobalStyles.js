import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "VarelaRound";
        src: url("./fonts/VarelaRound-Regular.ttf");
    }

    html,
    body {
        padding: 0;
        margin: 0;
        font-family: "VarelaRound", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    * {
        box-sizing: border-box;
    }
`;

export default GlobalStyles;
