import React from 'react';
import { shallow } from 'enzyme';
import Footer from '.';

describe('Footer component', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });
});
