const factorial = (number) => {
  if (number < 0) throw new Error('No se permite factorial de un numero negativo');
  return number == 0 ? 1 : number * factorial(number - 1);
};

console.log(factorial(-1));
