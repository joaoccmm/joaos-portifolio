import React, { FC } from 'react';
//components
import { CvButton, HomeContent, HomeText, HomeTitle, LocationContent } from './styles';
import { useTranslation } from 'react-i18next';
import LocationIcon from '../../assets/img/location-icon.svg';
import DownloadIcon from '../../assets/img/download-icon.svg';
import LinkedInIcon from '../../assets/img/linkedin-icon.svg';


export const Home: FC<any> = (props) => {
  const { } = props;

  const { t } = useTranslation();

  return (
    <HomeContent>
      <HomeTitle>{t('home.introduction')}</HomeTitle>
      <HomeText>{t('home.dev')}</HomeText>
      <LocationContent>
        <img src={LocationIcon} alt="location icon" />
        <span>Belo Horizonte, Brasil</span>
      </LocationContent>
      <div className='flex-row align-center'>
        <CvButton>
          <img src={DownloadIcon} alt="" />
          <span>Download CV</span>
        </CvButton>
        <img src={LinkedInIcon} alt="" />
      </div>
    </HomeContent>
  );
};