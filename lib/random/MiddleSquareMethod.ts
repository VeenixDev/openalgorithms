export default function nextRand(
	seed: number,
	digits: number
): number | typeof NaN {
	let seedLength = seed.toString().length;
	let n = (seed * seed).toString();

	if (seedLength != digits) {
		return NaN;
	}

	n = n.padStart(digits * 2, '0');

	let start = Math.floor(digits / 2);
	let end = start + digits;
	seed = parseInt(n.substring(start, end));

	return seed;
}
