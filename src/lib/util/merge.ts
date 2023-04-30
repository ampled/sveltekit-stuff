import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export { ClassValue };
export default function merge(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}
