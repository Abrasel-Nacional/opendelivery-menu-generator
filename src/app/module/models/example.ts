import { IMerchant } from "./merchant";
export interface IExample {
    name: string
    id: number
    text: string
}

export interface IResource {
    examples: IExample[]
}