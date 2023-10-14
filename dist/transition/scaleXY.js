import { cubicOut } from 'svelte/easing';
export function scaleXY(node, { delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0 } = {}) {
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
