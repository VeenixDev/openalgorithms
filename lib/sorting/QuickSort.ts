import { SortingDirection, swap, reverse } from './SortingOptions';

// https://www.guru99.com/quicksort-in-javascript.html
function sort(input: Array<number>, left: number, right: number): void {
	if (input.length > 1) {
		let index = divide(input, left, right);

		if (left < index - 1) {
			sort(input, left, index - 1);
		}
		if (index < right) {
			sort(input, index, right);
		}
	}
}

function divide(input: Array<number>, left: number, right: number): number {
	let pivot = input[Math.floor((right + left) / 2)],
		i = left,
		j = right;

	while (i <= j) {
		while (input[i] < pivot) {
			i++;
		}
		while (input[j] > pivot) {
			j--;
		}
		if (i <= j) {
			swap(input, i, j);
			i++;
			j--;
		}
	}
	return i;
}

export default (input: Array<number>, direction: SortingDirection) => {
	sort(input, 0, input.length - 1);

	if (direction === 'DESC') {
		reverse(input);
	}
};
