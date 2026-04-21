import { twMerge } from 'tailwind-merge';
import clsx, { ClassValue } from 'clsx';

/**
 * Utility function to combine and merge Tailwind CSS classes.
 * Uses clsx for conditional classes and tailwind-merge to handle conflicting Tailwind classes.
 *
 * @param inputs - Class values to combine (strings, arrays, objects, etc.)
 * @returns A single string of merged CSS classes
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
