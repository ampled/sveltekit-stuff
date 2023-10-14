import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
export default function merge(...inputs) {
    return twMerge(clsx(inputs));
}
