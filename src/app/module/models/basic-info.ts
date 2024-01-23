import { IAddress } from "./shared/address"
import { IImage } from "./shared/image"
import { IPrice } from "./shared/price"

interface ContactPhones {
  commercialNumber: string
  whatsappNumber: string
}

export interface IBasicInfo {
  name: string
  document: string
  corporateName: string
  description: string
  averageTicket: number | undefined
  averagePreparationTime: number | undefined
  minOrderValue: IPrice | undefined
  merchantType: string
  merchantCategories: Array<string>
  address: IAddress | undefined
  contactEmails: Array<string>
  contactPhones: ContactPhones | undefined
  logoImage: IImage | undefined
  bannerImage: IImage | undefined
  createdAt: string
}