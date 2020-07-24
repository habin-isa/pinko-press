import React from 'react';
import * as S from './styles';
import Navbar from '../Navbar';
import ContentContainer from '../ContentContainer';

const App = () => {
  return (
    <S.Wrapper>
      <Navbar />
      <ContentContainer />
    </S.Wrapper>
  );
};

export default App;
