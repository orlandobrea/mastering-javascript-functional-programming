const once = (fn) => {
  let done = false;
  return (...args) => {
    if (!done) {
      done = true;
      fn(...args);
    }
  };
};


// Run only if NOT being tested by jest
if (process.env.JEST_WORKER_ID === undefined) {
  const myFn = once(console.log);
  myFn('hola mundo');
  myFn('chau mundo');
}

module.exports = {
  once,
};
