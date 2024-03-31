import styled from "styled-components";

export const SideBarNav = styled.nav`
  width: 100vw;
  height: 100vh;
  padding: 52px 20px;
  position: fixed;
  top: 0;
  right: 0px;
  background-color: rgba(0, 0, 0, 0.5); /* Cor de fundo com transparência */
  backdrop-filter: blur(8px); /* Aplicando o filtro de desfoque */
  z-index: 999; /* Certifique-se de que a sobreposição esteja acima do conteúdo */
  transition: left 1s ease;

  display: flex;

  .sidebar.open {
    left: 0;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  a:hover {
    color: #ffcc00;
  }

  @media only screen and (min-width: 1049px) {
    display: none;
  }

  img{
    height: 20px;
    width: 20px;
  }
`;

export const SideBarUl = styled.ul`
    list-style-type: none;
    padding: 0;
`;

export const SideBarLi = styled.li`
    list-style-type: none;
    padding-bottom: 30px;
`;