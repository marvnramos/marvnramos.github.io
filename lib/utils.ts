import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class names into a single string, merging Tailwind CSS classes properly.
 * Uses clsx for conditional class names and tailwind-merge to handle Tailwind class conflicts.
 *
 * @param inputs - Class names or conditional class expressions
 * @returns A string of merged class names
 *
 * @example
 * // Basic usage
 * cn("px-4 py-2", "bg-blue-500")
 * // => "px-4 py-2 bg-blue-500"
 *
 * @example
 * // With conditions
 * cn("px-4 py-2", isActive && "bg-blue-500", !isActive && "bg-gray-500")
 * // => "px-4 py-2 bg-blue-500" or "px-4 py-2 bg-gray-500"
 *
 * @example
 * // Handling conflicts
 * cn("px-4", "px-6")
 * // => "px-6" (the later class takes precedence)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

