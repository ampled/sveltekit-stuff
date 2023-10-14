export type FirstArgOf<T> = T extends (first: infer FirstArgument, ...args: any[]) => any ? FirstArgument : never;
export type SecondArgOf<T> = T extends (first: any, second: infer SecondArgument, ...args: any[]) => any ? SecondArgument : never;
/**
 * Thank you Matt Pocock
 * {@link https://twitter.com/mattpocockuk/status/1622730173446557697}
 */
export type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
export type Optional<T> = T | undefined;
