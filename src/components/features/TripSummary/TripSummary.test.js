import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  /* check if generated url is correct */
  it('should generate correct address', () => {
    const id = 'abc';
    const expectedAddress = `/trip/${id}`;
    const component = shallow(<TripSummary id={'abc'} tags={[]} to={`/trip/${id}`} image={'Lorem_ipsum_image.jpg'} name={'mockName'} cost={'mockCost'} days={4}/>);
    const source = component.find('Link');
    const renderedAddress = source.prop('to');

    expect(renderedAddress).toEqual(expectedAddress);
  });
  /* check if <img> gets correct src and alt */
  it('should have correct src and alt for images', () => {
    const expectedName = 'Lorem ipsum';
    const expectedImage = 'Lorem_ipsum_image.jpg';
    const component = shallow(<TripSummary id={'mockId'} tags={[]} image={expectedImage} name={expectedName} cost={'mockCost'} days={4} />);
    const renderedImage = component.find('img');
    const src = renderedImage.prop('src');
    const alt = renderedImage.prop('alt');

    expect(src).toEqual(expectedImage);
    expect(alt).toEqual(expectedName);
  });
  /* check if props: name, cost, days render properly */
  it('should render props name, cost, days without crashing', () => {
    const component = shallow(<TripSummary id={'id'} tags={[]} image={'Lorem_ipsum_image.jpg'} name={'mockName'} cost={'mockCost'} days={4} />);
    expect(component). toBeTruthy();
  });
  /* check if there's an error without props: id, image, name, cost, days (requiredProps) */
  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
});
