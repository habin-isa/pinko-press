import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.5% 10%;
`;

export const Title = styled.span`
  font-size: 25px;
  letter-spacing: 0.25;
  line-height: 27px;
`;

export const LinkContainer = styled.div`
  font-size: 25px;
  letter-spacing: 0.25;
  line-height: 27px;
  width: 40%;
  justify-content: space-between;
  display: flex;
  color: black;
}
`;

export const Link = styled.a`
  &:hover {
    opacity: 0.8;
  }
`;