import { IItemPrice } from "./shared/item-price"

export interface IOption {
    id: string
    itemId: string
    index: number
    price: IItemPrice
    maxPermitted: number
}
