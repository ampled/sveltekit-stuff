/* eslint-disable no-param-reassign */
// const backOut = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';
/* eslint-disable no-param-reassign */

/**
 * Options for customizing ripples
 */
export const DEFAULT_OPTIONS: RippleOptions = {
	color: 'currentColor',
	class: '',
	opacity: 0.1,
	centered: false,
	spreadingDuration: 400,
	spreadingDelay: 50,
	spreadingTimingFunction: 'linear',
	clearingDuration: 1000,
	clearingDelay: 0,
	clearingTimingFunction: 'ease-in-out'
};

export type RippleOptions = {
	color: string;
	class: string;
	opacity: number;
	centered: boolean;
	spreadingDuration: number;
	spreadingDelay: number;
	spreadingTimingFunction: string;
	clearingDuration: number;
	clearingDelay: number;
	clearingTimingFunction: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isTouchEvent(e: any): e is TouchEvent {
	return e.touches ? !!e.touches[0] : false;
}

export function RippleStart(
	e: MouseEvent | TouchEvent | KeyboardEvent,
	options: Partial<RippleOptions> = {}
) {
	e.stopImmediatePropagation();
	const opts: RippleOptions = { ...DEFAULT_OPTIONS, ...options };
	// Parent element
	const target = (isTouchEvent(e) ? e.touches[0].target : e.currentTarget) as HTMLElement;
	const rippleContainer = target.querySelector('[data-ripple]');

	// Create ripple
	const ripple = document.createElement('div');
	const rippleStyle = ripple.style;

	// Adding default stuff
	ripple.className = `material-ripple ${opts.class}`;
	rippleStyle.position = 'absolute';
	rippleStyle.color = 'inherit';
	rippleStyle.borderRadius = '50%';
	rippleStyle.pointerEvents = 'none';
	rippleStyle.width = '100px';
	rippleStyle.height = '100px';
	rippleStyle.marginTop = '-50px';
	rippleStyle.marginLeft = '-50px';
	rippleContainer?.appendChild(ripple);
	rippleStyle.opacity = opts.opacity.toString();
	rippleStyle.transition = `transform ${opts.spreadingDuration}ms ${opts.spreadingTimingFunction} ${opts.spreadingDelay}ms, opacity ${opts.clearingDuration}ms ${opts.clearingTimingFunction} ${opts.clearingDelay}ms`;
	rippleStyle.transform = 'scale(0) translate(0,0)';
	rippleStyle.background = opts.color;

	// Positioning ripple
	const targetRect = target.getBoundingClientRect();
	if (opts.centered) {
		rippleStyle.top = `${targetRect.height / 2}px`;
		rippleStyle.left = `${targetRect.width / 2}px`;
	} else {
		const distY = isTouchEvent(e) ? e.touches[0].clientY : (<any>e).clientY;
		const distX = isTouchEvent(e) ? e.touches[0].clientX : (<any>e).clientX;
		rippleStyle.top = `${distY - targetRect.top}px`;
		rippleStyle.left = `${distX - targetRect.left}px`;
	}

	// Enlarge ripple
	rippleStyle.transform = `scale(${
		Math.max(targetRect.width, targetRect.height) * 0.02
	}) translate(0,0)`;
	return ripple;
}

/**
 * Destroys the ripple, slowly fading it out.
 *
 * @param {Element} ripple
 */
export function RippleStop(ripple: HTMLDivElement) {
	if (ripple) {
		ripple.addEventListener('transitionend', (e) => {
			if (e.propertyName === 'opacity') ripple.remove();
		});
		ripple.style.opacity = '0';
	}
}
