import React from 'react';
import * as S from './styles';

const Footer = () => {
  const getDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    return mm + '.' + dd + '.' + yyyy;
  };
  return (
    <S.Wrapper>
      <S.Title>PINKO PRESS 2020</S.Title>
      <S.Title>LAST UPDATED: {getDate()}</S.Title>
    </S.Wrapper>
  );
};

export default Footer;
