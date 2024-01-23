export interface INutritionalInfo {
    description: string
    calories: string
    allergen: string[]
    additives?: string[] 
    suitableDiet?: string[]
    isAlcoholic?: boolean
}