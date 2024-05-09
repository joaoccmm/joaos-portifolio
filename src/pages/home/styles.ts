import styled from "styled-components";

export const HomeContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 8vh;

  .span{
    color: ${props => props.theme.colors.primary} ;
  }

  .linkbtns{
    margin-top: 30px;
  }

  .name{
    span, h1,.smiley{
      display: inline-block;
    }

    span, .smiley{
      font-size: 2.9rem;
      font-weight: 600;
    }

    .textPrimary{
      margin-left: 6px;
    }
  }

  @keyframes wink {
    0% {
      content: ":)";
    }
    25% {
      content: ";)";
    }
    50% {
      content: ":p";
    }
    75%{
      content: ":o";
    }
    100% {
      content: ";D";
    }
  } 

  .smiley::after {
    content: ":)";
    animation: wink 3s infinite alternate;
  }
`;

export const HomeTitle = styled.h1`
  font-size: 2.4rem;
  /* margin-right: 10px; */
  font-weight: 600;
  color: ${props => props.theme.colors.font} ;
`;

export const HomeText = styled.p`
  font-size: 2.8rem;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const HomeSpan = styled.span`
  font-size: 1.2rem;
`;

export const LocationContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  width: 196px;

  img{
    margin-right: 10px;
  }

  span{
    font-size: 1rem;
  }
`;

export const ContactButton = styled.button`
  height: 35px;
  width: 12rem;
  padding: 5px 10px;
  border-radius: 4px;
  margin-right: 20px;

  border: ${props => props.theme.colors.primary} solid 1px;
  background: none;

  cursor: pointer;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  span{
    color: ${props => props.theme.colors.font};
    font-size: 1rem;
    margin-left: 5px;
  }
`;

export const ModalChildren = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const LinkContent = styled.a`
  display: flex;
  flex-direction: column;
  cursor: pointer;


  img{
    height: 7vh;
    margin-bottom: 30px;
  }

  span{
    font-weight: 600;
    font-size: 1rem;
  }
`;
