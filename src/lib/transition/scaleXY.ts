import { cubicOut } from 'svelte/easing';
import type { EasingFunction, TransitionConfig } from 'svelte/transition';

export interface ScaleXYParams {
	delay?: number;
	duration?: number;
	easing?: EasingFunction;
	opacity?: number;
	x?: number;
	y?: number;
}

export function scaleXY(
	node: Element,
	{ delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0 }: ScaleXYParams = {}
): TransitionConfig {
	const style = getComputedStyle(node);
	const target_opacity = +style.opacity;
	const transform = style.transform === 'none' ? '' : style.transform;

	const sdx = 1 - x;
	const sdy = 1 - y;
	const od = target_opacity * (1 - opacity);

	return {
		delay,
		duration,
		easing,
		css: (_t, u) => `
			transform: ${transform} scale(${1 - sdx * u}, ${1 - sdy * u});
			opacity: ${target_opacity - od * u}
		`
	};
}

export default scaleXY;
