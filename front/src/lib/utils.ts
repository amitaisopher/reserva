import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getBaseURLForEnvironment() {
    return import.meta.env.VITE_BACKEND_BASE_URL
}