<script>
	import { ROUTE_TRANSITION, ROUTE_TRANSITION_PARAMS } from './const';

	export let title = '';
</script>

<div
	class="flex flex-col items-center justify-start h-full w-full gap-4"
	in:ROUTE_TRANSITION={ROUTE_TRANSITION_PARAMS}
>
	<h1 class="font-bold text-3xl">{title}</h1>
	<slot />
</div>
