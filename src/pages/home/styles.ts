import styled from "styled-components";

export const HomeContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HomeTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 15px;
`;

export const HomeText = styled.p`
  font-size: 2.8rem;
  margin-bottom: 15px;
`;

export const LocationContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 44px;

  img{
    margin-right: 10px;
  }

  span{
    font-size: 1rem;
  }
`;

export const CvButton = styled.button`
  width: 160px;
  height: 30px;
  border: none;
  border-radius: 6px;
  margin-right: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.colors.primary};

  cursor: pointer;
  span{
    color: ${props => props.theme.colors.font};
    font-size: 0.9rem;
    font-weight: 400;
    margin-left: 5px;
  }

  
`;