import { clsx } from 'clsx'
import type { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export type TClassValue = ClassValue
/** Utility function to merge Tailwind classes with clsx and tailwind-merge */
export function cn(...inputs: TClassValue[]) {
  return twMerge(clsx(inputs))
}
