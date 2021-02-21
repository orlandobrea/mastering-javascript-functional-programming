const { alternator } = require('./practice-2.2');

describe('test alternate', () => {
  it('test calling 1 times', () => {
    const myFnA = jest.fn(() => {});
    const myFnB = jest.fn(() => {});
    const alt = alternator(myFnA, myFnB);
    alt();
    expect(myFnA.mock.calls.length).toBe(1);
    expect(myFnB.mock.calls.length).toBe(0);
  });
  it('test calling 2 times', () => {
    const myFnA = jest.fn(() => {});
    const myFnB = jest.fn(() => {});
    const alt = alternator(myFnA, myFnB);
    alt();
    alt();
    expect(myFnA.mock.calls.length).toBe(1);
    expect(myFnB.mock.calls.length).toBe(1);
  });
  it('test calling 10 times', () => {
    const myFnA = jest.fn(() => {});
    const myFnB = jest.fn(() => {});
    const alt = alternator(myFnA, myFnB);
    for (let i = 0; i < 10; i++) {
      alt();
    }
    expect(myFnA.mock.calls.length).toBe(5);
    expect(myFnB.mock.calls.length).toBe(5);
  });
});
