import MiddleSquareMethod from '../../lib/random/MiddleSquareMethod';

describe('Middle Square Method', () => {
	test('seed = 1234, digits = 4', () => {
		let seed = 1234;
		let digits = 4;

		expect(MiddleSquareMethod(seed, digits)).toEqual(5227);
	});

	test('seed = 1234, digits = 5', () => {
		let seed = 1234;
		let digits = 5;

		expect(MiddleSquareMethod(seed, digits)).toBeNaN();
	});

	test('seed = 12345, digits = 4', () => {
		let seed = 12345;
		let digits = 4;

		expect(MiddleSquareMethod(seed, digits)).toBeNaN();
	});
});
