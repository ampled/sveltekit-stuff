import { splitCssUnit } from '../util';
import { backOut } from 'svelte/easing';
import type { EasingFunction, TransitionConfig } from 'svelte/transition';

export interface RotateParams {
	delay?: number;
	duration?: number;
	easing?: EasingFunction;
	opacity?: number;
	rotation?: number | string;
	x?: number;
	y?: number;
}

export function rotate(
	node: Element,
	{
		delay = 0,
		duration = 400,
		easing = backOut,
		rotation = 180,
		opacity = 0,
		x = 0,
		y = 0
	}: RotateParams = {}
): TransitionConfig {
	const style = getComputedStyle(node);
	const target_opacity = +style.opacity;
	const transform = style.transform === 'none' ? '' : style.transform;
	const od = target_opacity * (1 - opacity);
	const [rotateValue, rotateUnit] = splitCssUnit(rotation, 'deg');
	const [xValue, xUnit] = splitCssUnit(x);
	const [yValue, yUnit] = splitCssUnit(y);
	return {
		delay,
		duration,
		easing,
		css: (t, u) => `
			rotate: ${(1 - t) * rotateValue}${rotateUnit};
			transform: ${transform}
				translate(${(1 - t) * xValue}${xUnit}, ${(1 - t) * yValue}${yUnit});
			opacity: ${target_opacity - od * u}`
	};
}

export default rotate;
