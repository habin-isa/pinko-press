import React from 'react';
import * as S from './styles';
import Navbar from '../Navbar';
import ContentContainer from '../ContentContainer';
import TileContainer from '../TileContainer';

const App = () => {
  return (
    <S.Wrapper>
      <Navbar />
      <ContentContainer />
      <TileContainer />
    </S.Wrapper>
  );
};

export default App;
