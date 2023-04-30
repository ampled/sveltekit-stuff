import type { SecondArgOf } from '$lib/types';
import { fly } from 'svelte/transition';

export const ROUTE_TRANSITION = fly;
export const ROUTE_TRANSITION_PARAMS: SecondArgOf<typeof ROUTE_TRANSITION> = { y: 100 };
