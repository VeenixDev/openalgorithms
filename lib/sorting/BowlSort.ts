import { reverse, SortingDirection } from './SortingOptions';

/**
 * Initial design of the algorithm:
 * Christian Hübner (Bytecm): https://github.com/Bytecm
 *
 * Translated into typescript:
 * Paul Schmeing (VeenixDev): https://github.com/VeenixDev
 */

export default function sort(
	input: Array<number>,
	direction: SortingDirection
) {
	let highest = -1;

	for (let i = 0; i < input.length; i++) {
		if (input[i] > highest) {
			highest = input[i];
		}
	}

	let counted = new Array<number>();

	for (let i = 0; i < highest + 1; i++) {
		counted[i] = 0;
	}

	for (let i = 0; i < input.length; i++) {
		counted[input[i]] += 1;
	}

	let result = [];
	let index = 0;

	for (let i = 0; i < counted.length; i++) {
		while (counted[i] > 0) {
			result[index] = i;
			index++;
			counted[i]--;
		}
	}

	if (direction === 'DESC') {
		reverse(result);
	}

	for (let i = 0; i < input.length; i++) {
		input[i] = result[i];
	}
}
