import React from 'react';
import * as S from './styles';

const Tile = ({ data }) => {
  return (
    <S.Wrapper>
      <S.Title>{data.title}</S.Title>
      {data.author !== '' ? <S.Author>by {data.author}</S.Author> : <span />}
    </S.Wrapper>
  );
};

export default Tile;
