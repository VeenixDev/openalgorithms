import QuickSort from '../../lib/sorting/QuickSort';
import '../../lib/sorting/SortingOptions';

describe('QuickSort', () => {
	test('unsorted ASC', () => {
		let unsorted = [5, 1];
		let result = [1, 5];

		QuickSort(unsorted, 'ASC');

		expect(unsorted).toEqual(result);
	});
	test('unsorted DESC', () => {
		let unsorted = [1, 5, 3, 7, 2, 6, 4, 9, 8];
		let result = [9, 8, 7, 6, 5, 4, 3, 2, 1];

		QuickSort(unsorted, 'DESC');

		expect(unsorted).toEqual(result);
	});
	test('sorted ASC', () => {
		let unsorted = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		let result = [1, 2, 3, 4, 5, 6, 7, 8, 9];

		QuickSort(unsorted, 'ASC');

		expect(unsorted).toEqual(result);
	});
	test('sorted DESC', () => {
		let unsorted = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		let result = [9, 8, 7, 6, 5, 4, 3, 2, 1];

		QuickSort(unsorted, 'DESC');

		expect(unsorted).toEqual(result);
	});
	test('double input ASC', () => {
		let unsorted = [1, 5, 3, 7, 2, 6, 4, 2, 9, 8];
		let result = [1, 2, 2, 3, 4, 5, 6, 7, 8, 9];

		QuickSort(unsorted, 'ASC');

		expect(unsorted).toEqual(result);
	});
	test('double input DESC', () => {
		let unsorted = [1, 5, 3, 7, 2, 6, 4, 2, 9, 8];
		let result = [9, 8, 7, 6, 5, 4, 3, 2, 2, 1];

		QuickSort(unsorted, 'DESC');

		expect(unsorted).toEqual(result);
	});
});
