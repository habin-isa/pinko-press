import React from 'react';
import { shallow } from 'enzyme';
import InfoContainer from '.';

describe('InfoContainer component', () => {
  it('renders without crashing', () => {
    shallow(<InfoContainer />);
  });
});
