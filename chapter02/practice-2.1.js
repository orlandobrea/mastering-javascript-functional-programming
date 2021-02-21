// Once without extra variables
const once = (fn) => {
  return (...args) => {
    fn(...args);
    fn = () => {};
  };
};

// Run only if NOT being tested by jest
if (process.env.JEST_WORKER_ID === undefined) {
  const callOnce = once(console.log);
  callOnce('hola');
  callOnce('mundo');
}

module.exports = {
  once,
};
