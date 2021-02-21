
const once = fn => {
	let done = false;
  return (...args) => {
  	if (!done) {
    	done = true;
      fn(...args)
    }
  }
}

const f = once(console.log)
f('hola mundo')
f('chau mundo')
