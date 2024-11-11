import { fly } from 'svelte/transition';

export const ROUTE_TRANSITION = fly;
export const ROUTE_TRANSITION_PARAMS: Parameters<typeof ROUTE_TRANSITION>[1] = {
	// Infers FlyParams
	duration: 250,
	opacity: 0,
	x: 300
};
