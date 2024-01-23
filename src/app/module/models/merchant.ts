import { IAvailability } from "./availability"
import { IBasicInfo } from "./basic-info"
import { ICategory } from "./category"
import { IItem } from "./item"
import { IItemOffer } from "./item-offer"
import { IMenu } from "./menu"
import { IOptionGroup } from "./option-group"
import { IService } from "./service"

export interface IMerchant {
    lastUpdate: string
    TTL: number
    id: string
    status: string
    basicInfo: IBasicInfo
    services: IService[]
    menus: IMenu[]
    categories: ICategory[]
    itemOffers: IItemOffer[]
    items: IItem[]
    optionGroups: IOptionGroup[]
    availabilities: IAvailability[]
}