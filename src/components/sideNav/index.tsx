import React from 'react';
//styles
import { SideBarLi, SideBarNav, SideBarUl } from './styles';
//components
import { Visibility } from '../visibility';
//assests
import CloseIcon from '../../assets/img/close-icon.svg';

export const SideNav: React.FC<any> = ({ isOpen, handleOpenSideBar }) => {

  return (
    <Visibility visible={isOpen}>
      <SideBarNav>
        <img src={CloseIcon} onClick={handleOpenSideBar} />
        <SideBarUl>
          <SideBarLi><a href="/" className='link ativo'>Home</a></SideBarLi>
          <SideBarLi><a href="/sobre" className='link'>Projects</a></SideBarLi>
          <SideBarLi><a href="/contato" className='link'>Coworkers</a></SideBarLi>
          <SideBarLi><a href="/contato" className='link'>About</a></SideBarLi>
        </SideBarUl>

      </SideBarNav>
    </Visibility>
  );
};
