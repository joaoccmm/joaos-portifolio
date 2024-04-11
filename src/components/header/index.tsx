import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//components 
import { SideNav } from '../sideNav';
//styled
import { ActionIcon, HeaderLi, HeaderNav, HeaderUl, Logo, SideBarImg } from './styles';
//assets
import SunIcon from '../../assets/img/sun-icon.svg';
import VerifyIcon from '../../assets/img/verify.svg';
import SideBarIcon from '../../assets/img/nav-icon.svg';
import TranslateIcon from '../../assets/img/translate-icon.svg';
//interface
import { IHeader } from './interface';
//translation
import { useTranslation } from 'react-i18next';


export const Header: React.FC<IHeader> = ({ handleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const handleOpenSideBar = () => {
    setIsOpen(!isOpen);
  };

  const handleTranslation = () => {
    if (i18n?.language === 'pt')
      i18n.changeLanguage('en');
    else if (i18n?.language === 'en')
      i18n.changeLanguage('pt');
  };


  return (
    <header>
      <HeaderNav>
        <Logo>
          <h1>joaocm</h1>
          <img src={VerifyIcon} alt="verify icon" className='verifyIcon' />
        </Logo>
        <HeaderUl>
          <HeaderLi><Link to="/" className='link ativo'>{t('header.option1')}</Link></HeaderLi>
          <HeaderLi><Link to="/projects" className='link'>{t('header.option2')}</Link></HeaderLi>
          <HeaderLi><Link to="/coworkers" className='link'>{t('header.option3')}</Link></HeaderLi>
          <HeaderLi><Link to="/about" className='link'>{t('header.option4')}</Link></HeaderLi>
        </HeaderUl>
        <ActionIcon>
          <img src={SunIcon} onClick={handleTheme} alt="verify icon" className='themeIcon' />
          <img src={TranslateIcon} onClick={handleTranslation} alt="verify icon" className='translateIcon' />
        </ActionIcon>
        <SideBarImg src={SideBarIcon} className='sideBarIcon' onClick={handleOpenSideBar} />
      </HeaderNav>
      <SideNav isOpen={isOpen} handleOpenSideBar={handleOpenSideBar} />
    </header>
  );
};
