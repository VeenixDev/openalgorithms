import { swap, reverse } from '../../lib/sorting/SortingOptions';

describe('SortingOptions', () => {
	test('swap', () => {
		let array = [1, 2];
		let result = [2, 1];

		swap(array, 0, 1);
		expect(array).toEqual(result);
	});
	test('reverse', () => {
		let array = [1, 2, 3];
		let result = [3, 2, 1];

		reverse(array);
		expect(array).toEqual(result);
	});
});
