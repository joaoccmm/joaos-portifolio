import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    font-family: "Poppins", sans-serif;
    font-style: normal;
  }

  body{
    background-color: ${props => props.theme.colors.background};
    margin: 0;
    padding: 0;
    color: ${props => props.theme.colors.font};
  }

  a{
    font-style: none;
    text-decoration: none;
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

  .textPrimary{
    color: ${props => props.theme.colors.primary};;
  }

  @media screen and (max-width: 1400px) {
    html{
      font-size: 16px !important;
    }
    .link{
      width: 500px;
      /* font-size: 1.1rem; */
    }

    .headerUl{
      width: 490px;
    }
  }

  @media screen and (max-width: 1200px) {
    html{
      font-size: 11px !important;
    }
/*     
    .logo{
      h1{
        font-size: 1.4rem;
      }
    } */

    .headerUl{
      display: none;
    }
  }

  @media screen and (max-width: 600px) {
    html{
      font-size: 10px !important;
    }
    .logo{
      h1{
        font-size: 2.2rem;
      }

    }
    .actionIcon, .sideBarIcon, .logo{
      img{
        height: 2.3rem;
        width: 2.3rem;
      }
    }

  }
`;