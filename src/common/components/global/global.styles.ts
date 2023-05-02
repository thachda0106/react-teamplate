import { css } from "@emotion/react";

export const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");

  html {
    box-sizing: border-box;
  }

  body {
    font-family: "Roboto", sans-serif;
    line-height: 1.5;
    text-rendering: optimizeSpeed;
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
`;
