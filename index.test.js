const {convertTimeToWords} = require('./index.js')

describe('convertTimeToWords', () => {
  it('Handles midnight', () => {
    expect(convertTimeToWords('0:00')).toBe('midnight');
  });

  it('Handles 30 - 8:30', () => {
    expect(convertTimeToWords('8:30')).toBe('half past eight');
  });

  it('Handles times after 30 min - 2:33', () => {
    expect(convertTimeToWords('2:33')).toBe('twenty seven to three');
  });

  it('Handles times before 30 min - 2:26', () => {
    expect(convertTimeToWords('2:26')).toBe('twenty six past two');
  });

  it(`Handles o'clock 2:00`, () => {
    expect(convertTimeToWords('2:00')).toBe(`two o'clock`);
  });

  it('Handles a quarter before 30 5:15', () => {
    expect(convertTimeToWords('5:15')).toBe('quarter past five');
  });

  it('Handles a quarter after 30 9:45', () => {
    expect(convertTimeToWords('9:45')).toBe('quarter to ten');
  })

});

