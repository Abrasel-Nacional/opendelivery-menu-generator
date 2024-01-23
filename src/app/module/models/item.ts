import { INutritionalInfo } from "./shared/nutritional-info"
import { IImage } from "./shared/image"

export interface IItem {
    id: string
    name: string
    description: string
    externalCode: string
    image: IImage
    nutritionalInfo?: INutritionalInfo
    serving?: number
    unit: string
    ean?: string
}