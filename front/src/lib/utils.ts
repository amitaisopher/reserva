import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getBaseURLForEnvironment() {
    // return process.env.environment === 'DEV' ? 'http://localhost:8000' : 'https://something-secured'
    return 'http://localhost:8000'
}