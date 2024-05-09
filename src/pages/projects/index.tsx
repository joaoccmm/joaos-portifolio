import React from 'react';
//components 
//styled
import { ProjectsTitle } from './styles';
//assets
//interface
//translation
import { useTranslation } from 'react-i18next';
import { ProjectsContent } from '../../components/projectsContent';


export const Projects: React.FC<any> = ({ }) => {

  const { t } = useTranslation();

  return (
    <>
      <ProjectsTitle>{t('projects.title')}</ProjectsTitle>
      <ProjectsContent />
    </>
  );
};
