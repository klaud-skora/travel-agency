import React from 'react';
import HappyHourAd from './HappyHourAd';
import { shallow } from 'enzyme';

const select = {
  title: '.title',
  countdown: '.countdown',
  promoDescription: '.promoDescription',
};
const mockProps = {
  title: 'Happy Hour',
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
  it('should have title from props title', () => {

    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedTitle = component.find(select.title).text();
    expect(renderedTitle).toEqual(mockProps.title);
  });
});

const trueDate = Date;

const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length) {
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }

  static now() {
    return (new Date(customDate)).getTime();
  }
};

const checkDescriptionAtTime = (time, expectedDescription) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedTime = component.find(select.promoDescription).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component HappyHourAd with mocked Date', () => {

  /* If we wanted to change Date to mockDate in every test || HARD SETTINGS */
  //global.Date = mockDate;
  /* in the test below we change Date to mockDate and then we go back to default */


  checkDescriptionAtTime('11:57:58', '122');
  checkDescriptionAtTime('11:59:59', '1');
  checkDescriptionAtTime('13:00:00', 23 * 60 * 60 + '');
});
