import React from 'react';
import HappyHourAd from './HappyHourAd';
import { shallow } from 'enzyme';

describe('Componentr HappyHourAd', () => {
  it('should render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });
});
