const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(expected);
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('2', () => {
    // https://jestjs.io/pt-BR/docs/expect#tothrowerror
    expect(() => {
      getOpeningHours('Gremio', '09:00-PM');
    }).toThrow('The day must be valid. Example: Monday');
    expect(() => {
      getOpeningHours('Tuesday', 'gremio');
    }).toThrow('The hour should represent a number');
    expect(() => {
      getOpeningHours('Tuesday', '09:00-GM');
    }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
    expect(() => {
      getOpeningHours('Tuesday', '19:00-PM');
    }).toThrow('The hour must be between 0 and 12');
    expect(() => {
      getOpeningHours('Tuesday', '09:99-PM');
    }).toThrow('The minutes must be between 0 and 59');
  });
});
