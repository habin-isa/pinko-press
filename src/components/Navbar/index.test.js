import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '.';

describe('Navbar component', () => {
  it('renders without crashing', () => {
    shallow(<Navbar />);
  });
});
