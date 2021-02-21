const newCounter = () => {
  let count = 0;
	return () => ++count;
}

const newCounterShorter = (count=0) => () => ++count;


const nc = newCounter();
console.log(nc()); // 1
console.log(nc()); // 2
console.log(nc()); // 3


const nc2 = newCounterShorter();
console.log(nc2()); // 1
console.log(nc2()); // 2
console.log(nc2()); // 3
