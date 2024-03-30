import styled from "styled-components";

export const HeaderNav = styled.nav`
  height: 6vh;
  width: calc(100% - 200px);

  /* box-sizing: border-box; */
  position: absolute;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
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
`;

export const HeaderUl = styled.ul`
  width: 30%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLi = styled.li`
  text-decoration: none;
  list-style: none;

  .link{
    font-size: 1em;
  }

  .ativo{
    padding-bottom: 10px;
    position: relative;
    overflow: hidden;
    border-bottom: 4px solid #FF1447;
    animation: moveLeftRight 2s alternate;
  }

  .hover{
    border-bottom: 4px solid #FF1447;    
  }
  
  @keyframes moveLeftRight {
  0% {
    left: 0; /* Começa na posição inicial */
  }
  100% {
    left: 50px; /* Move para a direita 50px */
  }
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
    height: 22px;
    cursor: pointer;
  }
`;
