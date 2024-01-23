import { DisponibilityEnum } from "./enums/disponibility"
import { IImage } from "./shared/image"

export interface ICategory {
    id: string
    index: number
    name: string
    description: string
    image: IImage,
    status: string
    externalCode: string
    availabilityId: string[]
    itemOfferId: string[]
}
