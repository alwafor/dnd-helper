export function statToModifier(stat: string) {
    return Math.floor((+stat - 10) / 2)
}