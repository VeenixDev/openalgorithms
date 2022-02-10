import { SortingDirection, swap } from "./SortingOptions";

function sort(input: Array<number>, direction: SortingDirection, low?: number, high?: number): void {
  if(!low) {
    low = 0;
  }
  if(!high) {
    high = input.length - 1;
  }

  if(low < high) {
    let part = partition(input, direction, low, high);
    sort(input, direction, low, part - 1);
    sort(input, direction, part + 1, high);
  }
}

function partition(input: Array<number>, direction: SortingDirection, low: number, high: number): number {

  let pivot = input[high];
  let i = low - 1;

  const check = direction === 'ASC' ?
    (index) => input[index] <= pivot : (index) => input[index] >= pivot;

  for(let j = low; j < high; j++) {
    if(check(j)) {
      i++;

      swap(input, i, j);
    }
  }
  i++;
  swap(input, i, high);

  return i;
}

export default (input: Array<number>, direction: SortingDirection) => sort(input, direction);