import React from 'react';
import * as S from './styles';

import Tile from '../Tile';
import data from '../../data/articles.json';

const TileContainer = () => {
  return (
    <S.Wrapper>
      <S.Row>
        <Tile data={data[0]} />
        <Tile data={data[1]} />
        <Tile data={data[2]} />
      </S.Row>
    </S.Wrapper>
  );
};

export default TileContainer;
