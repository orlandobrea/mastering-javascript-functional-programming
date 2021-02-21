const thisManyTimes = (fn, times) => {
  let counter = 0;
  return (...args) => {
    if (counter < times) {
      counter++;
      fn(...args);
    }
  };
};

// Run only if NOT being tested by jest
if (process.env.JEST_WORKER_ID === undefined) {
  sayA = () => console.log('A');
  const justOnce = thisManyTimes(sayA, 1);
  justOnce();
  justOnce();

  sayB = () => console.log('B');
  const twice = thisManyTimes(sayB, 2);

  twice();
  twice();
  twice();
}

module.exports = {
    thisManyTimes
}
