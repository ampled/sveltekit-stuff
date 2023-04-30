export type FirstArgOf<T> = T extends (first: infer FirstArgument, ...args: any[]) => any
	? FirstArgument
	: never;

export type SecondArgOf<T> = T extends (
	first: any,
	second: infer SecondArgument,
	...args: any[]
) => any
	? SecondArgument
	: never;
