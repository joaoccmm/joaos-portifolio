import React, { FC, useEffect, useRef } from 'react';
import { ModalBg, ModalContent } from './styles';
import { IModal } from './inteface';
//components

//assets

export const Modal: FC<IModal> = (props) => {
  const { onClose, children } = props;
  const ref = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <ModalBg>
      <ModalContent ref={ref}>
        {children}
      </ModalContent>
    </ModalBg>
  );
}; 