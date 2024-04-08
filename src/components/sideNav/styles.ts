import styled from "styled-components";

export const SideBarNav = styled.nav`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0px;

    background-color: rgba(0, 0, 0, 0.5); 
    backdrop-filter: blur(8px); 
    z-index: 999; 
    transition: left 1s ease;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .sidebar.open {
      left: 0;
    }

    a {
      text-decoration: none;
      color: ${props => props.theme.colors.font};
    }

    a:hover {
      color: #ffcc00;
    }

    @media only screen and (min-width: 1049px) {
      display: none;
    }
  `;

export const CloseIconNav = styled.img`
      height: 20px;
      width: 20px;

      cursor: pointer;
  `;

export const SideBarUl = styled.ul`

    margin-top: 40px;
      list-style-type: none;
      padding: 0;

      display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;

export const SideBarLi = styled.li`
      list-style-type: none;
      padding-bottom: 30px;
  `;