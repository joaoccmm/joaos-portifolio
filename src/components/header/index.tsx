import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
//components 
import { SideNav } from '../sideNav';
//styled
import { ActionIcon, HeaderLi, HeaderNav, HeaderUl, Logo, SideBarImg } from './styles';
//assets
import SunIcon from '../../assets/img/sun-dark-mode.svg';
import VerifyIcon from '../../assets/img/verify-dark-mode.svg';
import SideBarIcon from '../../assets/img/menu-dark-mode.svg';
import TranslateIcon from '../../assets/img/translate-dark-mode.svg';
//interface
import { IHeader } from './interface';
//translation
import { useTranslation } from 'react-i18next';


export const Header: React.FC<IHeader> = ({ handleTheme, theme }) => {
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
  console.log(theme);

  return (
    <header>
      <HeaderNav>
        <Logo className='logo'>
          <h1>joao’s</h1>
          <img src={VerifyIcon} alt="verify icon" className='verifyIcon' />
        </Logo>

        <HeaderUl className='headerUl'>
          <HeaderLi><NavLink to="/home" className="link">{t('header.option1')}</NavLink></HeaderLi>
          <HeaderLi><NavLink to="/projects" className='link'>{t('header.option2')}</NavLink></HeaderLi>
          <HeaderLi><NavLink to="/coworkers" className='link'>{t('header.option3')}</NavLink></HeaderLi>
          <HeaderLi><NavLink to="/about" className='link'>{t('header.option4')}</NavLink></HeaderLi>
        </HeaderUl>
        <ActionIcon className='actionIcon'>
          {/* <img src={SunIcon} onClick={handleTheme} alt="verify icon" className='themeIcon' /> */}
          <img src={TranslateIcon} onClick={handleTranslation} alt="verify icon" className='translateIcon' />
        </ActionIcon>
        <SideBarImg src={SideBarIcon} className='sideBarIcon' onClick={handleOpenSideBar} />
      </HeaderNav>
      <SideNav isOpen={isOpen} handleOpenSideBar={handleOpenSideBar} />
    </header>
  );
};
