import React from 'react';
import * as S from './styles';
// import { string } from 'prop-types';

const Navbar = () => {
  const openInstagram = () => {
    window.open('https://www.instagram.com/pinko.press/?hl=en', '_blank');
  };
  return (
    <S.Wrapper>
      <S.Title>PINKO PRESS</S.Title>
      <S.LinkContainer>
        <S.Link>INFO</S.Link>
        <S.Link href="mailto:tommyspitters@hotmail.co.uk">CONTACT</S.Link>
        <S.Link onClick={openInstagram}>FOLLOW</S.Link>
      </S.LinkContainer>
    </S.Wrapper>
  );
};

export default Navbar;
