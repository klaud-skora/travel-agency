import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate correct address', () => {
    const id = 'abc';
    const component = shallow(<TripSummary id={'abc'} />);
    //console.log(component.debug());
    component.find('TripSummary').simulate('click');

    expect(window.location.pathname).to.equal(`/trip/${id}`);
  });
  it('should have correct src and alt for images', () => {
    const component = shallow(<TripSummary><img src='Lorem ipsum' alt='Lorem ipsum'></img></TripSummary>);
    expect(component).toBeTruthy();
  });
});
