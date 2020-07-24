import React from 'react';
import { shallow } from 'enzyme';
import ContentContainer from '.';

describe('ContentContainer component', () => {
  it('renders without crashing', () => {
    shallow(<ContentContainer />);
  });
});
