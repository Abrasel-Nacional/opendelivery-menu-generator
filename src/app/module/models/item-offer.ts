import { IItemPrice } from "./shared/item-price"

export interface IItemOffer {
    id: string
    itemId: string
    index: number
    price: IItemPrice
    availabilityId: string[]
    optionGroupsId: string[]
}
