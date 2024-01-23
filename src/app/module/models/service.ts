import { IGeoCoordinate } from './shared/geo-coordenate'
import { IHours } from './shared/hours'
import { IPrice } from './shared/price'
import { IRadius } from './shared/radius'
import { ITimePeriods } from './shared/time-periods'

interface IHollidayHours {
    date: string
    timePeriods: ITimePeriods
}

interface IGeoRadius {
    geoMidpointLatitude: number
    geoMidpointLongitude: number
    radius: IRadius[]
}

interface IPolygon {
    geoCoordinates: IGeoCoordinate[]
    price: IPrice
    estimateDeliveryTime: number
}

interface IServiceHours {
    id: string
    weekHours: IHours[]
    holidayHours: IHollidayHours[]
}

interface IServiceArea {
    id: string
    polygon: IPolygon[]
    geoRadius: IGeoRadius
}

export interface IService {
    id: string
    status: string
    serviceType: string
    menuId: string
    serviceArea: IServiceArea
    serviceHours: IServiceHours
}