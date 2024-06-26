const bubbleStep = (input: number[]) => {
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

export const bubbleSort = (input: number[]) => {
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

export const selectionSort = (input: number[]) => {
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
    const stepBuilder = [...input];
    steps.push(stepBuilder);
  }

  const selectionSortResult = { sorted: input, steps: steps };
  return selectionSortResult;
};

//probably splice and join?

export const insertionSort = (input: number[]) => {
  let steps = [];
  let sorted = [input[0]];
  for (let j = 1; j < input.length; j++) {
    if (input[j] < sorted[0]) {
      sorted.unshift(input[j]);
    } else if (input[j] > sorted[sorted.length - 1]) {
      sorted.push(input[j]);
    } else if (sorted.length == 0) {
      sorted.push(input[j]);
    } else if (sorted.length == 1) {
      if (input[j] > sorted[0]) {
        sorted.push(input[j]);
      } else {
        sorted.unshift(input[j]);
      }
    } else {
      for (let i = 0; i < sorted.length - 1; i++) {
        //if input[i] GTE than previous and LTE than next
        //insert input[i]
        //has to be GTE or can't insert elements included in sorted
        //multiple insertions?
        if (input[j] >= sorted[i] && input[j] <= sorted[i + 1]) {
          sorted.splice(i + 1, 0, input[j]);
          //this increases the length of sorted by 1

          i = sorted.length;
        }
      }
    }

    const stepBuilder = [...sorted];
    steps.push(stepBuilder);
  }
  const insertSortResult = { sorted: sorted, steps: steps };
  return insertSortResult;
};

const mergeSort = (input: number[]) => {
  const nextStep = input;
};
const quickSort = (input: number[]) => {
  const nextStep = input;
};
