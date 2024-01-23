export interface IMenu {
    id: string
    name: string
    description: string
    externalCode: string
    disclaimer: string
    disclaimerURL?: string 
    categoryId: string[]
}
