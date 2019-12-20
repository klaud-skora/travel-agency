import React from 'react';
import HappyHourAd from './HappyHourAd';
import { shallow } from 'enzyme';

const select = {
  title: '.title',
  countdown: '.countdown',
  promoDescription: '.promoDescription',
};


describe('Componentr HappyHourAd', () => {
  it('should render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });
  it('should render heading and description', () => {
    const component = shallow(<HappyHourAd />);
    expect(component.exists(select.title)).toEqual(true);
    //expect(component.exists(select.countdown)).toEqual(true);
    expect(component.exists(select.promoDescription)).toEqual(true);
  });
});
