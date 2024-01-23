import { IOption } from "./option"

export interface IOptionGroup {
    id: string
    index: number
    name: string
    description: string
    externalCode: string
    status: string
    minPermitted: number
    maxPermitted: number
    options: IOption[]
}