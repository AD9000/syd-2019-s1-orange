const routes = require('./routes');

describe('routes', () => {

  it('all routes should exist', () => {
    expect(routes['/']).toBeDefined();
    expect(routes['contacts']).toBeDefined();
    expect(routes['team']).toBeDefined();
    expect(routes['404']).toBeDefined();
    expect(routes['confirmation']).toBeDefined();
    expect(routes['confirmed']).toBeDefined();
    expect(routes['client']).toBeDefined();
    expect(routes['collector']).toBeDefined();
  });

});
