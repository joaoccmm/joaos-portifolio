import styled from "styled-components";

export const HeaderNav = styled.nav`
  box-sizing: border-box;
  height: 6vh;
  width: 74%;

  display: flex;
  align-items: center;

  overflow: hidden;
  position: fixed;
`;


export const Logo = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: auto;

    .verifyIcon{
      height: 1.5rem;
      margin-left: 10px;
      margin-top: 2px;
    }
    
    h1{
      font-weight: 400 !important;
      font-size: 1.8rem;
    } 
`;

export const HeaderUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 680px;
`;


export const HeaderLi = styled.li`
  text-decoration: none;
  list-style: none;

  .link{
    font-size: 1.3rem;
    transition: 0.3s all;
  }

  .link::after {
    content: '';
    display: block;
    width: 0;
    height: 4px;
    background-color: ${props => props.theme.colors.primary};
    transition: width 0.2s;
  }

  .link:hover::after {
      width: 100%;
  }

  .active::after{
    content: '';
    display: block;
    width: 0;
    height: 4px;
    background-color: ${props => props.theme.colors.primary};
    transition: width 0.3s; 
    width: 100%;

  }
`;

export const ActionIcon = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 46px;
  margin-bottom: 3px;

  .translateIcon{
    margin-left: 24px;
  }

  img{
    height: 1.6rem;
    cursor: pointer;
  }
`;

export const SideBarImg = styled.img`
  cursor: pointer;
  height: 1.2rem;
  margin-left: 24px;
  margin-bottom: 4px;

  @media only screen and (min-width: 1200px) {
    display: none;
  }
`;
