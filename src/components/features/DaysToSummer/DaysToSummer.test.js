import React from 'react';
import DaysToSummer from './DaysToSummer';
import { shallow } from 'enzyme';

describe('Component DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });
  it('should render days to holiday', () => {
    const component = shallow(<DaysToSummer />);
    expect(component.exists('.days')).toEqual(true);
  });
});


const trueDate = Date;

const mockDate = customDate => class extends Date {
  constructor(...args) {
    if (args.length) {
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



const checkDaysAtDate = (date, expectedDescription) => {
  it(`should show correct at ${date}`, () => {
    global.Date = mockDate(`${date}T00:00:00.135Z`);

    const component = shallow(<DaysToSummer />);
    const renderedTime = component.find('.days').text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};


describe('Component DaysToSummer with mocked Date', () => {
  checkDaysAtDate('2019-06-20', '1');
  checkDaysAtDate('2019-12-22', '182');
  checkDaysAtDate('2018-10-04', '260');
});


const checkDescriptionAfterDays = (date, delayDays, expectedDescription) => {
  it(`should show correct value ${delayDays} seconds after ${date}`, () => {
    jest.useFakeTimers();
    global.Date = mockDate(`${date}T00:00:00.135Z`);

    const component = shallow(<DaysToSummer />);

    const newTime = new Date();
    newTime.setSeconds(newTime.getSeconds() + delayDays * 24 * 60 * 60);
    global.Date = mockDate(newTime.getTime());
    jest.advanceTimersByTime(delayDays * 24 * 60 * 60 * 1000);

    const renderedTime = component.find('.days').text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
    jest.useRealTimers();
  });
};

describe('Component DaysToSummer with mocked Date and delay', () => {
  checkDescriptionAfterDays('2019-06-19', 1, '1');
  checkDescriptionAfterDays('2019-12-20', 2, '182');
  checkDescriptionAfterDays('2018-10-04', 50, '210');
});


describe('Component DaysToSummer with mocked Date', () => {
  checkDaysAtDate('2019-06-21', '');
  checkDaysAtDate('2019-06-22', '');
  checkDaysAtDate('2018-09-22', '');
});

describe('Component DaysToSummer with mocked Date and delay', () => {
  checkDescriptionAfterDays('2019-06-19', 1, '1');
  checkDescriptionAfterDays('2019-06-20', 2, '');
  checkDescriptionAfterDays('2018-09-20', 2, '');
  checkDescriptionAfterDays('2018-09-20', 3, '271');
});

