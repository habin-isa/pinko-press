import React from 'react';
import { shallow } from 'enzyme';
import Tile from '.';

describe('Tile component', () => {
  it('renders without crashing', () => {
    shallow(<Tile />);
  });
});
