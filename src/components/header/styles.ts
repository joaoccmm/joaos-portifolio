import styled from "styled-components";

export const HeaderNav = styled.nav`
  height: 6vh;
  width: calc(100% - 200px);

  position: absolute;
  display: flex;
  align-items: center;

  /* .sideBarIcon{
    display: none;


    @media only screen and (max-width: 1049px) {
      display: flex;
      cursor: pointer;
      margin-right: auto;
    }
  } */
`;


export const Logo = styled.div`
    width: 25%;

    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: auto;
    .myPhoto{
      height: 40px;
      width: 40px;
      border-radius: 50%;
    }

    .verifyIcon{
      height: 22px;
      width: 22px;
      margin-left: 10px;
      margin-bottom: 2px;
    }

    h1{
      font-size: 1.4rem;
    } 

    @media only screen and (max-width: 1049px) {
      width: auto;
      margin-right: auto;
    }
`;

export const HeaderUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: 1600px) {
    width: 680px;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1599px) {
    width: 580px;
  }

  
  @media only screen and (min-width: 1050px) and (max-width: 1199px) {
    width: 460px;
  }

  @media only screen and (max-width: 1049px) {
    display: none;
  }

`;


export const HeaderLi = styled.li`
  text-decoration: none;
  list-style: none;

  .link{
    font-size: 1.1em;
  }

  .ativo{
    padding-bottom: 10px;
    position: relative;
    overflow: hidden;
    border-bottom: 4px solid #FF1447;
    animation: moveLeftRight 2s alternate;
  }
`;

export const ActionIcon = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 46px;
  margin-bottom: 2px;

  .translateIcon{
    margin-left: 24px;
  }

  img{
    height: 25px;
    cursor: pointer;
  }

  @media only screen and (max-width: 1049px) {
    display: none;
  }
`;

export const SideBarImg = styled.img`
  cursor: pointer;

  @media only screen and (min-width: 1049px) {
    display: none;
  }
`;
