import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${(props) => (props.showInfo ? 'white' : '#5ac28b')};
`;
