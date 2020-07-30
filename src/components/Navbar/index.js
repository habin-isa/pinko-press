import React from 'react';
import * as S from './styles';
import crossImg from '../../assets/cross_icon.png';
// import { string } from 'prop-types';

const Navbar = ({ onClick, showInfo }) => {
  const openInstagram = () => {
    window.open('https://www.instagram.com/pinko.press/?hl=en', '_blank');
  };
  return (
    <S.Wrapper>
      {showInfo === true ? <S.Title>PINKO PRESS</S.Title> : <S.Img src={crossImg} onClick={onClick} />}
      <S.LinkContainer>
        <S.Link onClick={onClick}>INFO</S.Link>
        <S.Link href="mailto:tommyspitters@hotmail.co.uk">CONTACT</S.Link>
        <S.Link onClick={openInstagram}>FOLLOW</S.Link>
      </S.LinkContainer>
    </S.Wrapper>
  );
};

export default Navbar;
