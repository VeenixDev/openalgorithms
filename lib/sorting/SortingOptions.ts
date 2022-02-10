export declare type SortingDirection = 'ASC' | 'DESC';

export function swap(
	array: Array<number>,
	index1: number,
	index2: number
): void {
	let temp = array[index1];
	array[index1] = array[index2];
	array[index2] = temp;
}

export function reverse(array: Array<number>): void {
	let n = array.length - 1;
	for (let i = 0; i < Math.ceil(n / 2); i++) {
		swap(array, i, n - i);
	}
}
