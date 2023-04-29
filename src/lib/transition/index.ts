import { backOut } from 'svelte/easing';
import type { EasingFunction, TransitionConfig } from 'svelte/transition';

export interface RotationParams {
	delay?: number;
	duration?: number;
	easing?: EasingFunction;
	opacity?: number;
	rotation?: number;
}

export function rotate(
	node: Element,
	{ delay = 0, duration = 400, easing = backOut, rotation = 180, opacity = 0 }: RotationParams = {}
): TransitionConfig {
	const style = getComputedStyle(node);
	const target_opacity = +style.opacity;
	const od = target_opacity * (1 - opacity);

	return {
		delay,
		duration,
		easing,
		css: (t, u) => `
			transform: rotate(${(1 - t) * rotation}deg);
			opacity: ${target_opacity - od * u}`
	};
}
