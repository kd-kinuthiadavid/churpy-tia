// https://docs.google.com/document/d/1VPqM0Jp4abAFYLMIHYfd62nlwIWjE_MzjkXzsE5bsrQ/edit#

type Matrix = Array<number[]>;

const inputArray: Matrix = [
  [1, 2, 3],
  [4, 5, 6],
];

const concatMatrix = (inputArr: Matrix): string[] => {
  const outPut: string[] = [];

  /**
   * with the second item of the inputArr (i.e, inputArr[1])
   * as the initial value and as long as the initial value is less than the lenght of the inputArr:
   */
  for (let initialVal = 1; initialVal < inputArr.length; initialVal++) {
    // loop through all the items in the first item of the inputArr, i.e
    // loop through all the items in inputArr[0]
    inputArray[0].forEach((firstArrItem) => {
      // loop trhough all the items in the subsequent item of the inputArr, i.e inputArr[initialVal++]]
      inputArr[initialVal].forEach((inputArrItem) => {
        // push the firstArrItem and the inputArrItem to the outPut arr
        outPut.push(`${firstArrItem} ${inputArrItem}`);
      });
    });
  }

  return outPut;
};

console.log("*****************", concatMatrix(inputArray));
