import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export { ClassValue };
export function merge(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}
