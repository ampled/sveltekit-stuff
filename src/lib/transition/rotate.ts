import { backOut } from 'svelte/easing';
import type { EasingFunction, TransitionConfig } from 'svelte/transition';

export interface RotateParams {
	delay?: number;
	duration?: number;
	/** @default backOut */
	easing?: EasingFunction;
	/** @default 0 */
	opacity?: number;
	/**  @default 180  */
	rotation?: number;
}

export function rotate(
	node: Element,
	{ delay = 0, duration = 250, easing = backOut, rotation = 180, opacity = 0 }: RotateParams = {}
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

export default rotate;
