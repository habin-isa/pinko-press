import React, { useState } from 'react';
import * as S from './styles';
import Navbar from '../Navbar';
import ContentContainer from '../ContentContainer';
import TileContainer from '../TileContainer';
import Footer from '../Footer';
import InfoContainer from '../InfoContainer';

const App = () => {
  const [showInfo, setShowInfo] = useState(true);
  const toggleInfo = () => {
    // showInfo === true ? setShowInfo(false) : setShowInfo(true);
    setShowInfo(!showInfo);
    console.log('showInfo:', showInfo);
  };
  return (
    <S.Wrapper>
      <Navbar onClick={toggleInfo} showInfo={showInfo} />
      {showInfo === false ? (
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
