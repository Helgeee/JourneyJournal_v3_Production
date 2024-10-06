import { INotes } from "./notes.interface"

//Типы Trips
export interface ICollection {
    id: number
    title: string
    img: string

    createdAt: Date
    updatedAt: Date

    notes: INotes[]
}

