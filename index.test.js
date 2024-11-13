const  { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });

  it('Handles times before 30 mins - 2:23', () => {
    const timeInWords = convertTimeToWords('2:23');
    expect(timeInWords).toBe('twenty-three past two');
  });

  it('Handles times after 30 mins non quarter - 2:48', () => {
    const timeInWords = convertTimeToWords('2:48');
    expect(timeInWords).toBe('twelve to three');
  });

  it('Handles o clock - 4:00', () => {
    const timeInWords = convertTimeToWords('4:00');
    expect(timeInWords).toBe("four o'clock");
  });

});
