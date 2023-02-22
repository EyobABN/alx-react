// import { configure, shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

// configure({adapter: new Adapter(0)});

describe('getFullYear', () => {
  it('should return the current year', () => {
    const year = new Date().getFullYear();
    expect(getFullYear()).toBe(year);
  });
})

describe('getFooterCopy', () => {
  it('should return the correct string depending on bool argument', () => {
    const stringIfTrue = "Holberton School";
    const stringIfFalse = "Holberton School main dashboard";
    expect(getFooterCopy(true)).toBe(stringIfTrue);
    expect(getFooterCopy(false)).toBe(stringIfFalse);
  })
})

describe('getLatestNotification', () => {
  it('should return latest notification string', () => {
    const notifString = "<strong>Urgent requirement</strong> - complete by EOD";
    expect(getLatestNotification()).toBe(notifString);
  })
})