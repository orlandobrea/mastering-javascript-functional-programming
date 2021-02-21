const { thisManyTimes } = require('./practice-2.3');

describe('test practice 2.3', () => {
  it('test with one allowed call', () => {
    const myFn = jest.fn(() => {});
    const once = thisManyTimes(myFn, 1);
    for(let i=0; i<10; i++) {
      once();
    }
    expect(myFn.mock.calls.length).toBe(1);
  });

  it('test with two allowed call', () => {
    const myFn = jest.fn(() => {});
    const twice = thisManyTimes(myFn, 2);
    for(let i=0; i<10; i++) {
      twice();
    }
    expect(myFn.mock.calls.length).toBe(2);
  });

  it('test with 10 allowed call', () => {
    const myFn = jest.fn(() => {});
    const justTen = thisManyTimes(myFn, 10);
    for(let i=0; i<20; i++) {
      justTen();
    }
    expect(myFn.mock.calls.length).toBe(10);
  });
});
