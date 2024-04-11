import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    font-family: "Poppins";
    font-weight: 600;
    font-style: normal;
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

  .flex-row{
    display: flex;
    flex-direction: row;
  }

  .flex-center{
    justify-content: center;
    align-items: center;
  }

  .justify-center{
    justify-content: center;
  }

  .align-center{
    align-items: center;
  }
`;