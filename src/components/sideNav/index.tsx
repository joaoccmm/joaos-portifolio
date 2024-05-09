import React from 'react';
//styles
import { CloseIconNav, SideBarLi, SideBarNav, SideBarUl } from './styles';
//components
import { Visibility } from '../visibility';
//assests
import CloseIcon from '../../assets/img/close-dark-mode.svg';
//translation
import { useTranslation } from 'react-i18next';

export const SideNav: React.FC<any> = ({ isOpen, handleOpenSideBar }) => {

  const { t } = useTranslation();

  return (
    <Visibility visible={isOpen}>
      <SideBarNav>
        <CloseIconNav src={CloseIcon} onClick={handleOpenSideBar} />
        <SideBarUl>
          <SideBarLi><a href="/" className='link ativo'>{t('header.option1')}</a></SideBarLi>
          <SideBarLi><a href="/sobre" className='link'>{t('header.option2')}</a></SideBarLi>
          <SideBarLi><a href="/contato" className='link'>{t('header.option3')}</a></SideBarLi>
          <SideBarLi><a href="/contato" className='link'>{t('header.option4')}</a></SideBarLi>
        </SideBarUl>
      </SideBarNav>
    </Visibility>
  );
};
