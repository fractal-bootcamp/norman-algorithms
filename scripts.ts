const bubbleStep = (input: Number[]) => {
  const nextStep = [...input]; // equivalent to const nextStep = input
  //could ...input ever not be equal to input here?
  for (let i = 0; i < nextStep.length - 1; i++) {
    let helper = [nextStep[i], nextStep[i + 1]];

    if (helper[0] > helper[1]) {
      nextStep[i] = helper[1];
      nextStep[i + 1] = helper[0];
    }
  }

  return nextStep;
};

export const bubbleSort = (input: Number[]) => {
  let steps = [];
  while (
    !input.every(
      (currentElement, currentIndex) =>
        bubbleStep(input)[currentIndex] === currentElement
    )
  ) {
    input = bubbleStep(input);
    steps.push(input);
  }

  const bubbleSortResult = { sorted: input, steps: steps };

  return bubbleSortResult;
};

export const selectionSort = (input: Number[]) => {
  let steps = [];
  for (let i = 0; i < input.length - 1; i++) {
    let smallest = input[i];
    let index = i;
    //retrieves smallest element in list, and index
    for (let j = i + 1; j < input.length; j++) {
      if (input[j] < smallest) {
        smallest = input[j];
        index = j;
      }
    }
    input[index] = input[i];
    input[i] = smallest;
    steps.push(input);
  }

  const selectionSortResult = { sorted: input, steps: steps };
  return selectionSortResult;
};

const insertionSort = (input: Number[]) => {
  const nextStep = input;
};
const mergeSort = (input: Number[]) => {
  const nextStep = input;
};
const quickSort = (input: Number[]) => {
  const nextStep = input;
};
