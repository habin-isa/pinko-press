import React from 'react';
import * as S from './styles';
import Navbar from '../Navbar';
import ContentContainer from '../ContentContainer';
import TileContainer from '../TileContainer';
import Footer from '../Footer';
import InfoContainer from '../InfoContainer';

const App = () => {
  return (
    <S.Wrapper>
      <Navbar />
      <InfoContainer />
      <ContentContainer />
      <TileContainer />
      <Footer />
    </S.Wrapper>
  );
};

export default App;
