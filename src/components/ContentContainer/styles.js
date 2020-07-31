import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 195px;
  letter-spacing: 0.25;
  line-height: 186px;
  text-align: center;
  font-family: 'Brut Display', sans-serif;
  @media only screen and (max-width: 767px) {
    font-size: 74px;
    line-height: 60px;
    padding-top: 18px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 121px;
    line-height: 145px;
    padding-top: 60px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 155px;
    line-height: 186px;
    padding-top: 44px;
  }
  @media only screen and (min-width: 1280px) {
    font-size: 200px;
  }
`;

export const Img = styled.img`
  @media only screen and (max-width: 767px) {
    height: 315px;
    padding: 16px 0;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    height: 767px;
    padding: 43px 0;
  }
  @media only screen and (min-width: 1024px) {
    height: 985px;
    padding: 43px 0;
  }
`;

export const Subtitle = styled.span`
  font-size: 70px;
  letter-spacing: 0.25;
  line-height: 63px;
  text-align: center;
  font-family: 'Brut Display', sans-serif;
  @media only screen and (min-width: 420px) and (max-width: 766px) {
    font-size: 38px;
    line-height: 31px;
    padding: 22px 5px;
    max-width: 550px;
  }
  @media only screen and (max-width: 419px) {
    font-size: 38px;
    line-height: 31px;
    padding: 22px 5px;
    max-width: 296px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 82px;
    line-height: 68px;
    padding: 48px 5px;
    max-width: 721px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 70px;
    line-height: 63px;
    padding: 45px 5px;
    max-width: 924px;
  }
`;

export const Content = styled.span`
  display: flex;
  align-items: flex-start;
  padding: 0 5%;
`;

export const Col = styled.span`
  font-size: 30px;
  line-height: 35px;
  padding: 30px;
`;
