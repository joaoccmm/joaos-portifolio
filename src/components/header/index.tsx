import React, { useState } from 'react';
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

export const Header: React.FC<IHeader> = ({ handleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <HeaderNav>
        <Logo>
          <h1>joaocm</h1>
          <img src={VerifyIcon} alt="verify icon" className='verifyIcon' />
        </Logo>
        <HeaderUl>
          <HeaderLi><a href="/" className='link ativo'>Home</a></HeaderLi>
          <HeaderLi><a href="/sobre" className='link'>Projects</a></HeaderLi>
          <HeaderLi><a href="/contato" className='link'>Coworkers</a></HeaderLi>
          <HeaderLi><a href="/contato" className='link'>About</a></HeaderLi>
        </HeaderUl>
        <ActionIcon>
          <img src={SunIcon} onClick={handleTheme} alt="verify icon" className='themeIcon' />
          <img src={TranslateIcon} alt="verify icon" className='translateIcon' />
        </ActionIcon>
        <SideBarImg src={SideBarIcon} className='sideBarIcon' onClick={handleOpenSideBar} />
      </HeaderNav>
      <SideNav isOpen={isOpen} handleOpenSideBar={handleOpenSideBar} />
    </header>
  );
};
