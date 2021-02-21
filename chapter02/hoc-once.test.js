const { once } = require('./hoc-once')

describe('tests once', () => {
  it('calling function without once', () => {
    const myFn = jest.fn((str) => {});
    myFn('hola');
    myFn('hola');
    expect(myFn.mock.calls.length).toBe(2);
  });

  it('calling function with once', () => {
    const myFn = jest.fn((str) => {});
    const myOnce = once(myFn);
    myOnce('hola');
    myOnce('hola');
    expect(myFn.mock.calls.length).toBe(1);
  });
});
