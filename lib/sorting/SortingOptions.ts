export declare type SortingDirection = 'ASC' | 'DESC';

export function swap(array: Array<number>, index1: number, index2: number) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}