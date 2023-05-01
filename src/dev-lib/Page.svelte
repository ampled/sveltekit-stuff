<script>
	import { ROUTE_TRANSITION, ROUTE_TRANSITION_PARAMS } from './const';

	export let title = '';
</script>

<!-- <div> -->
<div
	class="flex flex-col items-center justify-start min-h-[100%] h-full w-full gap-4 lg:pl-80 mb-52"
	in:ROUTE_TRANSITION={{ ...ROUTE_TRANSITION_PARAMS, delay: 300 }}
	out:ROUTE_TRANSITION={ROUTE_TRANSITION_PARAMS}
>
	<h1 class="font-bold text-3xl">{title}</h1>
	<slot />
</div>
<!-- </div> -->
