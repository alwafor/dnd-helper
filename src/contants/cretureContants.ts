export const types = ['Нежить', 'Абберация', 'Гуманоид'] as const
export const worldViews = ['Хаотично-злой', 'Нейтральный'] as const
export const sizes = ['Мелкий', 'Маленький', 'Средний', 'Большой', 'Огромный', 'Гигантский'] as const

export type TSize = typeof sizes[number]
export type TWorldView = typeof sizes[number]
export type TType = typeof sizes[number]