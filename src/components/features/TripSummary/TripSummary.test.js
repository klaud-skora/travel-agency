import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  // test elements of TripSummary

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
    const component = shallow(<TripSummary id={'mockId'} tags={['Lorem', 'ipsum']} image={expectedImage} name={expectedName} cost={'mockCost'} days={4} />);
    const renderedImage = component.find('img');
    const src = renderedImage.prop('src');
    const alt = renderedImage.prop('alt');

    expect(src).toEqual(expectedImage);
    expect(alt).toEqual(expectedName);
  });
  /* check if props: name, cost, days render properly */
  it('should render props name, cost, days without crashing', () => {
    const component = shallow(<TripSummary id={'id'} tags={['Lorem', 'ipsum']} image={'Lorem_ipsum_image.jpg'} name={'mockName'} cost={'mockCost'} days={4} />);
    expect(component).toBeTruthy();
  });
  /* check if there's an error without props: id, image, name, cost, days (requiredProps) */
  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  // test tags in TripSummary
  it('should render subsequent tags in <span>', () => {
    const expectedTag1 = 'Lorem';
    const expectedTag2 = 'ipsum';
    const expectedTag3 = 'dapsum';

    const component = shallow(<TripSummary id={'id'} tags={[expectedTag1, expectedTag2, expectedTag3]} image={'Lorem_ipsum_image.jpg'} name={'mockName'} cost={'mockCost'} days={4} />);
    const firstTag = component.find('.tags span').at(0).text();
    const secondTag = component.find('.tags span').at(1).text();
    const thirdTag = component.find('.tags span').at(2).text();

    expect(firstTag).toEqual(expectedTag1);
    expect(secondTag).toEqual(expectedTag2);
    expect(thirdTag).toEqual(expectedTag3);
  });
  /* check if props tags if false (undefined) or is an empty array => div.tags should not render*/
  const emptyTagsArray = [];
  let undefinedTagsArray;

  const componentFirst = shallow(<TripSummary id={'id'} tags={emptyTagsArray} image={'Lorem_ipsum_image.jpg'} name={'mockName'} cost={'mockCost'} days={4} />);
  const componentSecond = shallow(<TripSummary id={'id'} tags={undefinedTagsArray} image={'Lorem_ipsum_image.jpg'} name={'mockName'} cost={'mockCost'} days={4} />);

  expect(componentFirst.exists('div.tags')).toEqual(false);
  expect(componentSecond.exists('div.tags')).toEqual(false);


});
