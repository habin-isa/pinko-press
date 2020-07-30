import React, { useState } from 'react';
import * as S from './styles';
import Navbar from '../Navbar';
import ContentContainer from '../ContentContainer';
import TileContainer from '../TileContainer';
import Footer from '../Footer';
import InfoContainer from '../InfoContainer';

const App = () => {
  const [showInfo, setShowInfo] = useState(false);
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };
  return (
    <S.Wrapper>
      <Navbar onClick={toggleInfo} showInfo={showInfo} />
      {showInfo === true ? (
        <InfoContainer />
      ) : (
        <div>
          {' '}
          <ContentContainer />
          <TileContainer />
          <Footer />
        </div>
      )}
    </S.Wrapper>
  );
};

export default App;
