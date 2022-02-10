import { SortingDirection, swap } from "./SortingOptions";

export default function sort(
	input: Array<number>,
	direction: SortingDirection
): void {
	let swapped;

	// moved it outside to get better performance;
	const check =
		direction === 'ASC'
			? (index) => input[index - 1] > input[index]
			: (index) => input[index - 1] < input[index];

	do {
		swapped = false;

		for (let i = 1; i < input.length; i++) {
			if (check(i)) {
				swap(input, i - 1, i);
				swapped = true;
			}
		}
	} while (swapped);
}
