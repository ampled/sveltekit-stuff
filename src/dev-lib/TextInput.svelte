<script lang="ts">
	interface Props {
		title?: string;
		value?: string;
		class?: string;
	}

	let { title = '', value = $bindable(''), class: className = '' }: Props = $props();
	
</script>

<label class={`flex flex-col min-w-[320px] w-[600px] ${className}`}>
	<b>{title}</b>
	<input
		type="text"
		class="border border-black rounded dark:text-white dark:bg-black dark:border-white px-2"
		bind:value
	/>
</label>
