import React from 'react';
import * as S from './styles';

import Tile from '../Tile';

const TileContainer = () => {
  return (
    <S.Wrapper>
      <S.Row>
        <Tile />
        <Tile />
        <Tile />
      </S.Row>
      <S.Row>
        <Tile />
        <Tile />
        <Tile />
      </S.Row>
    </S.Wrapper>
  );
};

export default TileContainer;
