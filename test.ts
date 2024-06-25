const selectionSort = (input: Number[]) => {
  const array = structuredClone(input);
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
    steps.push(structuredClone(array));
    console.log("exit", steps, array);
  }

  return steps;
};

const ANDREWS_ARRAY_DONOTCHANGE = [2, 7, 3, 4, 5];

const SORTED_ARRAY_STEPS = selectionSort(ANDREWS_ARRAY_DONOTCHANGE);

console.log("ANDREWS_ARRAY_DONOTCHANGE:", ANDREWS_ARRAY_DONOTCHANGE);
console.log("SORTEDARRAYSTEPS:", SORTED_ARRAY_STEPS);
console.log("SORTEDARRAY:", SORTED_ARRAY_STEPS.slice(-1));

// console.log(selectionSort([6, 5, 4, 3, 2, 1, 0]));
//assign the name input thru parameter
