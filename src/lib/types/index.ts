export type FirstArgOf<T> = T extends (first: infer FirstArgument, ...args: unknown[]) => unknown
	? FirstArgument
	: never;

export type SecondArgOf<T> = T extends (
	first: unknown,
	second: infer SecondArgument,
	...args: unknown[]
) => unknown
	? SecondArgument
	: never;

/**
 * Thank you Matt Pocock
 * {@link https://twitter.com/mattpocockuk/status/1622730173446557697}
 */
export type Prettify<T> = {
	[K in keyof T]: T[K];
	// eslint-disable-next-line @typescript-eslint/ban-types
} & {};

export type Optional<T> = T | undefined;
