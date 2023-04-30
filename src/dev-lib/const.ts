import { rotate } from '$lib';
import type { SecondArgOf } from '$lib/types';
import { fly, slide, blur } from 'svelte/transition';

export const ROUTE_TRANSITION = fly;
export const ROUTE_TRANSITION_PARAMS: SecondArgOf<typeof ROUTE_TRANSITION> = {
	duration: 250,
	opacity: 0,
	y: -300
};
