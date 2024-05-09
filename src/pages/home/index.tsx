import React, { FC, useState } from 'react';
//components
import { HomeContent, HomeText, HomeTitle, LocationContent, HomeSpan, ContactButton, ModalChildren, LinkContent } from './styles';
import { useTranslation } from 'react-i18next';
//assets
import LocationIcon from '../../assets/img/location-dark-mode.svg';
// import { Visibility } from '../../components/visibility';
// import { Modal } from '../../components/modal';
// import LinkedInIcon from '../../assets/img/linkedin.svg';
// import GitHubIcon from '../../assets/img/github.svg';
// import Email from '../../assets/img/mail.svg';
import Download from '../../assets/img/download-icon.svg';

export const Home: FC<any> = (props) => {
  const { } = props;
  const { t } = useTranslation();

  const downloadPDF = () => {
    const pdfUrl = 'http://localhost:3000/joaoscv.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'joaoscv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // const [isOpen, setIsOpen] = useState<boolean>(false);

  // const meuEnderecoEmail = 'joaoccmm.dev@gmail.com';

  // const handleAbrirEmail = () => {
  //   window.open(`https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=${meuEnderecoEmail}`);
  // };


  // const header = (
  //   <ModalChildren>
  //     <LinkContent onClick={handleAbrirEmail}>
  //       <img src={Email} />
  //       <span>{t('home.mail')}</span>
  //     </LinkContent>
  //     <LinkContent href='https://www.linkedin.com/in/jo%C3%A3o-victor-coelho-994a821a8/' target="_blank">
  //       <img src={LinkedInIcon} />
  //       <span>{t('home.linked')}</span>
  //     </LinkContent>
  //     <LinkContent href='https://github.com/joaoccmm' target="_blank">
  //       <img src={GitHubIcon} />
  //       <span>{t('home.git')}</span>
  //     </LinkContent>
  //   </ModalChildren>
  // );

  return (
    <HomeContent>
      <HomeTitle>{t('home.hello')}</HomeTitle>
      <div className='name'><HomeTitle>{t('home.introduction')}</HomeTitle> <span className='textPrimary'>João</span> <div className="smiley textPrimary"></div></div>
      <HomeText>{t('home.dev')}</HomeText>
      <HomeSpan>{t('home.experience')}</HomeSpan>
      <HomeSpan>{t('home.enthousiaste')}</HomeSpan>
      <LocationContent>
        <img src={LocationIcon} alt="location icon" />
        <span>Belo Horizonte, Brasil</span>
      </LocationContent>
      <div className='flex-row align-center linkbtns'>
        <ContactButton className='homeBtn' onClick={() => console.log('teste123')}>
          <span>{t('home.contact')}</span>
        </ContactButton>
        <ContactButton className='homeBtn' onClick={() => downloadPDF()}>
          <img src={Download} alt="" />
          <span>Download CV</span>
        </ContactButton>
      </div>
      {/* <Visibility visible={isOpen}>
        <Modal onClose={() => setIsOpen(false)} children={header} />
      </Visibility> */}
    </HomeContent>
  );
}; 