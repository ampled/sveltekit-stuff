import type { Action } from 'svelte/action';

export const clickOutside: Action<
	HTMLElement,
	undefined,
	{ onclickOut: (e: CustomEvent<HTMLElement>) => void }
> = (node) => {
	const handleClick = (event: MouseEvent) => {
		if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent<HTMLElement>('clickOut', { detail: node }));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
};

export type ClickOutsideEvent = CustomEvent<HTMLElement>;
