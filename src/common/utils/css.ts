import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class values into a single string using twMerge and clsx.
 *
 * @param inputs - An array of class values to be combined
 * @returns A merged and deduped className string
 *
 * @example
 * ```tsx
 * import { cn } from './common/utils/css';
 *
 * function Component({ className }) {
 *   return <div className={cn('default-class', className, isActive && 'active-class')} />;
 * }
 * ```
 */
export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};
