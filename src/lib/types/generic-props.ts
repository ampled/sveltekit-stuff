import type { SvelteHTMLElements } from 'svelte/elements';

// TODO: rydde litt her
type RemoveIndex<T> = {
	[K in keyof T as string extends K ? never : number extends K ? never : K]: T[K];
};

type HTMLElementAttributes = {
	[K in keyof SvelteHTMLElements]: SvelteHTMLElements[K];
};

export type HTMLTagName = Exclude<keyof RemoveIndex<HTMLElementAttributes>, number>;

export type HTMLAttributes<T extends HTMLTagName> = {
	[K in keyof HTMLElementAttributes[T]]: HTMLElementAttributes[T];
};

export type HtmlAttributeProps =
	| ({ tag: 'div' } & HTMLElementAttributes['div'])
	| ({ tag: 'a' } & HTMLElementAttributes['a']);

// type Prettify<T> = {
// 	[K in keyof T]: T[K];
// } & {};
