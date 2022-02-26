const { queryString, parse } = require('./queryString');

describe('Object to query string', () => {
  it('should create a valid query string when an object is an object', () => {
    const obj = {
      name: 'Bruno',
      profession: 'Broke',
    };

    expect(queryString(obj)).toBe('name=Bruno&profession=Broke');
  });

  it('should create a valid query string even when an array is passed as a value', () => {
    const obj = {
      name: 'Bruno',
      abilities: ['JS', 'TDD'],
    };

    expect(queryString(obj)).toBe('name=Bruno&abilities=JS,TDD');
  });

  it('should throw an error when an object is passed as a value', () => {
    const obj = {
      name: 'Bruno',
      abilities: {
        first: 'JS',
        second: 'TDD',
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Bruno&profession=developer';

    expect(parse(qs)).toEqual({
      name: 'Bruno',
      profession: 'developer',
    });
  });

  it('should convert a query string of a single key-value par to object', () => {
    const qs = 'name=Bruno';

    expect(parse(qs)).toEqual({
      name: 'Bruno',
    });
  });

  it('should convert a query string to object taking care of comma separated value', () => {
    const qs = 'name=Bruno&abilities=JS,TDD';

    expect(parse(qs)).toEqual({
      name: 'Bruno',
      abilities: ['JS', 'TDD'],
    });
  });
});
