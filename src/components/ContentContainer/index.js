import React from 'react';
import * as S from './styles';
import coverImg from '../../assets/cover_02.png';
import data from '../../data/content.json';

const ContentContainer = () => {
  return (
    <S.Wrapper>
      <S.Title>RISE INTO RUIN</S.Title>
      <S.Img src={coverImg} />
      <S.Subtitle>SOCIAL HOUSING, GENTRIFICATION & THE VENICE BIENNALE</S.Subtitle>
      <S.Content>
        <S.Col>{data[0].content}</S.Col>
        <S.Col>{data[1].content}</S.Col>
      </S.Content>
    </S.Wrapper>
  );
};

export default ContentContainer;
