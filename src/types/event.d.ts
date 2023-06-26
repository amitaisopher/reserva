import type { PaymentMethod } from "@/types/payment"

type Event = {
    id: string
    name: string
    description: string
    startTime: Date
    endTime: Date
    location: string
    paymentMethods: PaymentMethod[]
}

interface FoodEvent {
    kitchen: string[]
    dishes: Dish[]
}

interface Dish {
    name: string
    description: string
    price: number
    alergicIngridients: string[]
    extras: Extra[]
    variants: 
}

type Extra = {
    name: string,
    price: nubmer
}

type DishVariant = "vegan" | "vegeteerian" | "gluten free" | "carbs free" | "reeduced sugar"

export { Event }
