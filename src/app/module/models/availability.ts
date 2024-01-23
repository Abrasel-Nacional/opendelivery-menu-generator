import { IHours } from "./shared/hours"

export interface IAvailability {
    id: string
    startDate: string
    endDate: string
    hours: IHours[]
}
