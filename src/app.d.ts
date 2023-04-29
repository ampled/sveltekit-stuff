// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	namespace svelteHTML {
		// enhance attributes
		interface HTMLAttributes<T extends EventTarget> {
			// If you want to use on:beforeinstallprompt
			// 'on:clickOut'?: (event: CustomEvent<HTMLElement>) => void;
			'on:clickOut'?: MouseEventHandler<CustomEvent<T>>;
		}
	}
}

export {};
