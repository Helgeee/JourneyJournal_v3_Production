import { ICollection } from "./collection.interface"


export interface INotes {

    id: number
    img: string
    title: string
    coordinate: number 
    text: string

    createdAt: Date
    updatedAt: Date

    collection?:  ICollection | null

}

export interface INotesData{
    title: string 
    img: string
    coordinate: number 
    text: string
    collection: number
}