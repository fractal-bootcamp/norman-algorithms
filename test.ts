const selectionSort = (input: Number[]) => {
  const array = input; //structuredclone
  let steps = [];

  for (let i = 0; i < array.length - 1; i++) {
    let smallest = array[i];
    let index = i;
    //retrieves smallest element in list, and index
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < smallest) {
        smallest = array[j];
        index = j;
      }
    }
    array[index] = array[i];
    array[i] = smallest;
    console.log("entry", steps, array);
    steps.push(array); //structuredclone
    console.log("exit", steps, array);
  }

  return steps;
};

const ANDREWS_ARRAY_DONOTCHANGE = [2, 7, 3, 4, 5];

const SORTED_ARRAY_STEPS = selectionSort(ANDREWS_ARRAY_DONOTCHANGE);

console.log("ANDREWS_ARRAY_DONOTCHANGE:", ANDREWS_ARRAY_DONOTCHANGE);
console.log("SORTEDARRAYSTEPS:", SORTED_ARRAY_STEPS);
console.log("SORTEDARRAY:", SORTED_ARRAY_STEPS.slice(-1));

//Inserts into a sorted array
const insertIntoSorted = (array, digit) => {
  if (digit < array[0]) {
    array.unshift(digit);
  } else if (digit > array[array.length - 1]) {
    array.push(digit);
  } else if (array.length == 0) {
    array.push(digit);
  } else if (array.length == 1) {
    if (digit > array[0]) {
      array.push(digit);
    } else {
      array.unshift(digit);
    }
  } else {
    for (let i = 0; i < array.length - 1; i++) {
      //if digit GTE than previous and LTE than next
      //insert digit
      //has to be GTE or can't insert elements included in array
      //multiple insertions?
      if (digit >= array[i] && digit <= array[i + 1]) {
        array.splice(i + 1, 0, digit);
        //this increases the length of array by 1

        i = array.length;
      }
    }
  }
  return array;
};

const insertionSort = (input) => {
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

    console.log(sorted);
  }
  return sorted;
};

const mergeSort = (inputArray) => {
  if (inputArray.length == 1) {
  }
  if (inputArray.length == 2) {
  }
  const subArrayA = inputArray.splice(0);
  const subArrayB = inputArray.splice();
  return mergeSort(inputArray);
};
//assign the name input thru parameter
//splice inserts BEFORE the start

[1, 2, 3].splice();
