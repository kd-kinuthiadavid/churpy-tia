const parseMultiplicationSeparatedExpression = (expression: string): number => {
  const starSeparatedNumbersArr: string[] = expression.split("*");
  const numbersToMultiplyArr: number[] = starSeparatedNumbersArr.map(
    (starSeparatedNo: string) => +starSeparatedNo
  );
  const initialValue = 1.0;
  const result: number = numbersToMultiplyArr.reduce(
    (acc, no) => acc * no,
    initialValue
  );

  return result;
};

// both * -
const parseMinusSeparatedExpression = (expression: string) => {
  const minusSeparatedNumbersArr: string[] = expression.split("-");
  const numbersToSubtractArr: number[] = minusSeparatedNumbersArr.map(
    (minusSeparatedNumber) =>
      parseMultiplicationSeparatedExpression(minusSeparatedNumber)
  );

  const initialValue = numbersToSubtractArr[0];
  const result = numbersToSubtractArr
    .slice(1)
    .reduce((acc, no) => acc - no, initialValue);
  return result;
};

const parsePlusSeparatedExpression = (expression: string): number => {
  const plusSeparatedNumbersArr: string[] = expression.split("+");
  const numbersToAddArr = plusSeparatedNumbersArr.map(
    (plusSeparatedNumber: string) =>
      parseMinusSeparatedExpression(plusSeparatedNumber)
  );
  const initialValue = 0.0;
  const result = numbersToAddArr.reduce((acc, no) => acc + no, initialValue);
  return result;
};
const parse = (expression: string): number => {
  const result: number = parsePlusSeparatedExpression(expression);
  return result;
};

console.log("**********", parse("1+2*3+4-1-2"));
// 1. 1, 2*3, 4-1-2
//2. 1, 2*3, 4, 1, 2
//3. 1, 6, 1

/**
 * 1. (1) + ( 2*3) + (4-1-2)
 * 2. (1) + ( 2*3) + (1)
 * 3. (1) + ( 6) + (1)
 */
