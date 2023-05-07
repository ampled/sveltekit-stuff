import { RippleStart, RippleStop, type RippleOptions } from './ripple';
import './ripple.css';

/**
 * @param node {Element}
 */
export function ripple(node: Element, _options: Partial<RippleOptions> = {}) {
	let options = _options;
	let destroyed = false;
	let ripple: ReturnType<typeof RippleStart>;
	let keyboardActive = false;
	const handleStart = (e: Event) => {
		ripple = RippleStart(e as any, options);
	};
	const handleStop = () => RippleStop(ripple);
	const handleKeyboardStart = (e: Event) => {
		if (e instanceof KeyboardEvent) {
			if (!keyboardActive && (e.keyCode === 13 || e.keyCode === 32)) {
				ripple = RippleStart(e, { ...options, centered: true });
				keyboardActive = true;
			}
		}
	};
	const handleKeyboardStop = () => {
		keyboardActive = false;
		handleStop();
	};

	function setup() {
		node.classList.add('esks-ripple-container');
		node.addEventListener('pointerdown', handleStart);
		node.addEventListener('pointerup', handleStop);
		node.addEventListener('pointerleave', handleStop);
		node.addEventListener('keydown', handleKeyboardStart);
		node.addEventListener('keyup', handleKeyboardStop);
		destroyed = false;
	}

	function destroy() {
		node.classList.remove('s-ripple-container');
		node.removeEventListener('pointerdown', handleStart);
		node.removeEventListener('pointerup', handleStop);
		node.removeEventListener('pointerleave', handleStop);
		node.removeEventListener('keydown', handleKeyboardStart);
		node.removeEventListener('keyup', handleKeyboardStop);
		destroyed = true;
	}

	if (options) setup();

	return {
		update(newOptions: Partial<RippleOptions>) {
			options = newOptions;
			if (options && destroyed) setup();
			else if (!(options || destroyed)) destroy();
		},
		destroy
	};
}

export default ripple;
