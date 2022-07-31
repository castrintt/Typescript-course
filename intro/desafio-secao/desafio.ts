const firstNumber: number = Math.round(Math.random() * 100);

const secondNumber: number = Math.round(Math.random() * 300);

const sumTwoNumbers = (numberOne: number, numberTwo: number) => {
  let sum: number = numberOne + numberTwo;
  return sum;
};

console.log(sumTwoNumbers(firstNumber, secondNumber));
