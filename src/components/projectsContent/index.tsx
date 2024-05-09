import React from 'react';
//styles
//components
//assests
import TsIcon from '../../assets/img/ts-icon.svg';
import ReactIcon from '../../assets/img/react-icon.svg';
import GreenfyBanner from '../../assets/img/greenfy.jpg';
import StyledIcon from '../../assets/img/styled-icon.svg';
import NetflixBanner from '../../assets/img/netflix-clone.jpg';
//translation
import { useTranslation } from 'react-i18next';
import { Blur, BlurIcons, BlurText, Content, Teste } from './styles';


export const ProjectsContent: React.FC<any> = () => {

  const { t } = useTranslation();

  return (
    <Teste>
      <Content>
        <img src={NetflixBanner} />
        <Blur>
          <BlurText>Netflix Clone</BlurText>
          <BlurIcons>
            <img src={TsIcon} alt="" />
            <img src={ReactIcon} alt="" />
            <img src={StyledIcon} className='styled' alt="" />
          </BlurIcons>
        </Blur>
      </Content>
      <Content>
        <img src={GreenfyBanner} />
        <Blur>
          <BlurText>GreenFy (UI)</BlurText>
          <BlurIcons>
            <img src={StyledIcon} className='styled' />
          </BlurIcons>
        </Blur>
      </Content>
      <Content>
        <img src={GreenfyBanner} />
        <Blur>
          <BlurText>GreenFy (UI)</BlurText>
          <BlurIcons>
            <img src={StyledIcon} className='styled' />
          </BlurIcons>
        </Blur>
      </Content>
      <Content>
        <img src={NetflixBanner} />
        <Blur>
          <BlurText>Netflix Clone</BlurText>
          <BlurIcons>
            <img src={TsIcon} alt="" />
            <img src={ReactIcon} alt="" />
            <img src={StyledIcon} className='styled' alt="" />
          </BlurIcons>
        </Blur>
      </Content>
    </Teste>
  );
};
