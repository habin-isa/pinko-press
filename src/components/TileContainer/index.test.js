import React from 'react';
import { shallow } from 'enzyme';
import TileContainer from '.';

describe('TileContainer component', () => {
  it('renders without crashing', () => {
    shallow(<TileContainer />);
  });
});
