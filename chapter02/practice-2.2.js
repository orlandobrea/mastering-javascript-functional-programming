const alternator = (fn1, fn2) => {
  let currentFn = fn1;
  return (...args) => {
    currentFn(...args);
    currentFn = currentFn == fn1 ? fn2 : fn1;
  };
};

// Run only if NOT being tested by jest
if (process.env.JEST_WORKER_ID === undefined) {
  let sayA = () => console.log('A');
  let sayB = () => console.log('B');
  let alt = alternator(sayA, sayB);

  alt();
  alt();
  alt();
  alt();
  alt();
  alt();
}

module.exports = {
  alternator,
};
