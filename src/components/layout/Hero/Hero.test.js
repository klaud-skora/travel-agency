import React from 'react';
import {shallow} from 'enzyme';
import Hero from './Hero';

describe('Component Hero', () => {
  it('should render without crashing', () => {
    const component = shallow(<Hero titleText='Lorem ipsum' imageSrc='Lorem_ipsum_image.jpg' />);
    console.log(component.debug());
    expect(component).toBeTruthy();
  });
  it('should throw error without required props', () => {
    expect(() => shallow(<Hero />)).toThrow();
  });
  it('should render correct title and image', () => {
    const expectedTitle = 'Lorem ipsum';
    const expectedImage = 'image.jpg';
    const component = shallow(<Hero titleText={expectedTitle} imageSrc={expectedImage} />);

    const renderedTitle = component.find('.title').text();
    expect(renderedTitle).toEqual(expectedTitle);
    expect(component.find('.image').prop('src')).toEqual(expectedImage);
  });
  it('renders correct classNames', () => {
    const mockVariants = 'small dummy';
    const component = shallow(<Hero titleText='Lorem' imageSrc='image.jpg' variant={mockVariants} />);
    expect(component.hasClass('component')).toBe(true);
    expect(component.hasClass('small')).toBe(true);
    expect(component.hasClass('dummy')).toBe(true);
  });
  it('should contain HappyHourAd', () => {
    const component = shallow(<Hero titleText='Lorem ipsum' imageSrc='Lorem_ipsum_image.jpg' />);
    const happyhourComponent = component.find('HappyHourAd');
    expect(happyhourComponent.length).toEqual(1);
  });
  it('should contain DaysToSummer', () => {
    const component = shallow(<Hero titleText='Lorem ipsum' imageSrc='Lorem_ipsum_image.jpg' />);
    const happyhourComponent = component.find('DaysToSummer');
    expect(happyhourComponent.length).toEqual(1);
  });
});
