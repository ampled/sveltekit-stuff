import { splitCssUnit } from '../util';
import { backOut } from 'svelte/easing';
export function rotate(node, { delay = 0, duration = 250, easing = backOut, rotation = 180, opacity = 0, x = 0, y = 0 } = {}) {
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
