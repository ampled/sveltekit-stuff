export default function splitCssUnit(
	value: number | string,
	unitIfNumber = 'px'
): [number, string] {
	const split = typeof value === 'string' && value.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
	return split ? [parseFloat(split[1]), split[2] || unitIfNumber] : [value as number, unitIfNumber];
}
