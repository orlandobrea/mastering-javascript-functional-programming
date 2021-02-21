const upwardsFactorial = (number) => {
  const calculate = (current, max) => {
    return current == max ? current : current * calculate(current + 1, max);
  };

  if (number < 0) throw new Error('No se permite negativo');
  return number == 0 ? 1 : calculate(1, number);
};

console.log(upwardsFactorial(5));
