import styled from "styled-components";


export const ModalBg = styled.div`

  background-color: rgba(255, 255, 255, 0.5);
  position: fixed;
  z-index: 999;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px !important;
`;

export const ModalContent = styled.div`
  border-radius: 25px;
  background-color:  ${props => props.theme.colors.background};
  min-height: 30vh;
  min-width: 30vw;
  padding: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;