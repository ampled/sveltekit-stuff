export function clickOutside(node: HTMLElement) {
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
}

export type ClickOutsideEvent<T = any> = CustomEvent<T>;
declare global {
	namespace svelteHTML {
		interface HTMLAttributes<T extends EventTarget> {
			'on:clickOut'?: (event: ClickOutsideEvent<T>) => void;
		}
	}
}
