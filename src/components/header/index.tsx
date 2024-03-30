import React, { useContext } from 'react';
//styled
import { ActionIcon, HeaderLi, HeaderNav, HeaderUl, Logo } from './styles';
import { ThemeContext } from 'styled-components';
//assets
import VerifyIcon from '../../assets/img/verify.svg';
import SunIcon from '../../assets/img/sun-icon.svg';
import TranslateIcon from '../../assets/img/translate-icon.svg';
import { IHeader } from './interface';

export const Header: React.FC<IHeader> = ({ handleTheme }) => {

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
      </HeaderNav>
    </header>
  );
};
