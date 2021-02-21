const { once } = require('./practice-2.1')

describe('tests once', () => {
  it('calling function with once', () => {
    const myFn = jest.fn(() => {});
    const myOnce = once(myFn);
    myOnce();
    myOnce();
    expect(myFn.mock.calls.length).toBe(1);
  });
});
