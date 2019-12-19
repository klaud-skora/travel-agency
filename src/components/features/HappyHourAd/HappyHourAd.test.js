import React from 'react';
import HappyHourAd from './HappyHourAd';
import { shallow } from 'enzyme';
import { exportAllDeclaration } from '@babel/types';

describe('Componentr HappyHourAd', () => {
  it('should render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    exportAllDeclaration(component).toBeTruthy();
  });
});
