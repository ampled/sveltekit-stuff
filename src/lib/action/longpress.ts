import type { Action } from 'svelte/action';

export const longpress: Action<HTMLElement, number, { onlong: () => void }> = (
	node: HTMLElement,
	time = 200
) => {
	let timeoutPtr: number;
	let _time = time;
	function handleMouseDown(e: MouseEvent | TouchEvent) {
		window.addEventListener('mousemove', handleMoveBeforeLong);
		timeoutPtr = window.setTimeout(() => {
			window.removeEventListener('mousemove', handleMoveBeforeLong);
			node.dispatchEvent(new CustomEvent('long'));
			// TODO - ideally make this not trigger long press again
			window.setTimeout(() => node.dispatchEvent(e), 0);
		}, _time);
	}
	function handleMoveBeforeLong() {
		window.clearTimeout(timeoutPtr);
		window.removeEventListener('mousemove', handleMoveBeforeLong);
	}
	function handleMouseUp() {
		window.clearTimeout(timeoutPtr);
		window.removeEventListener('mousemove', handleMoveBeforeLong);
	}
	node.addEventListener('mousedown', handleMouseDown, { passive: true });
	node.addEventListener('mouseup', handleMouseUp, { passive: true });
	node.addEventListener('touchstart', handleMouseDown, { passive: true });
	node.addEventListener('touchend', handleMouseUp), { passive: true };
	return {
		destroy: () => {
			node.removeEventListener('mousedown', handleMouseDown);
			node.removeEventListener('mouseup', handleMouseUp);
			node.removeEventListener('touchstart', handleMouseDown);
			node.removeEventListener('touchend', handleMouseUp);
		},
		update: (newTime: number) => {
			_time = newTime;
			node.removeEventListener('mousedown', handleMouseDown);
			node.removeEventListener('mouseup', handleMouseUp);
			node.removeEventListener('touchstart', handleMouseDown);
			node.removeEventListener('touchend', handleMouseUp);
			node.addEventListener('mousedown', handleMouseDown, { passive: true });
			node.addEventListener('mouseup', handleMouseUp, { passive: true });
			node.addEventListener('touchstart', handleMouseDown, { passive: true });
			node.addEventListener('touchend', handleMouseUp), { passive: true };
		}
	};
};
