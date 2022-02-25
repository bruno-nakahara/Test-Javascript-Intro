const { queryString } = require('./queryString');

describe('Object to query string', () => {
  it('should create a valid query string when an object is an object', () => {
    const obj = {
      name: 'Bruno',
      profession: 'Broke',
    };

    expect(queryString(obj)).toBe('name=Bruno&profession=Broke');
  });
});
