import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    font-family: "BLOUSE";
    font-weight: normal;
    font-size: 16px;
  }

  body{
    background-color: ${props => props.theme.colors.background};
    margin: 0;
    padding: 0;
    color: ${props => props.theme.colors.font};
  }

  a{
    color: ${props => props.theme.colors.font};
  }
`;