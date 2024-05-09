import styled from "styled-components";

export const Teste = styled.div`
  display: flex;
  gap: 60px;
  margin-top: 20px;
`;

export const Content = styled.div`
  width: 350px;
  height: 200px;

  position: relative;

  img{
    height: 100%;
    width: 100%;
  }
`;


export const Blur = styled.div`
  width: 100%;
  height: 100%;
  
  position: absolute;
  top: 0;

  background-color: rgba(0, 0, 0, 0.7); 
  z-index: 9; 

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;

  &:hover{
    display: none;
  }
`;

export const BlurText = styled.h2`
  font-size: 1rem;
`;

export const BlurIcons = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;

  img{
    height: 15px;
    width: 15px;
  }

  .styled{
    height: 24px;
    width: 24px;
  }
`;