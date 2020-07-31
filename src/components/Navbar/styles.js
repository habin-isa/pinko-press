import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 767px) {
    font-size: 14px;
    padding: 12px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 29px;
    padding: 14px 24px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 23px;
    padding: 29px 46px;
  }
  background: ${(props) => (props.showInfo === true ? 'white' : '#5ac28b')};
`;

export const Title = styled.span`
  letter-spacing: 0.25;
  line-height: 27px;
`;

export const LinkContainer = styled.div`
  letter-spacing: 0.25;
  line-height: 27px;
  justify-content: space-between;
  display: flex;
  color: black;
}
`;

export const Link = styled.a`
  &:hover {
    opacity: 0.8;
  }
  @media only screen and (max-width: 767px) {
    padding: 0 5px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 0 27px;
  }
  @media only screen and (min-width: 1024px) {
    padding: 0 22px;
  }
`;

export const Img = styled.img`
  height: 21px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
