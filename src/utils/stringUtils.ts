export const addPlusToPositive = (n: number) => n > 0 ? '+' + n : String(n)

export const removeSubstringFromStringWithComas = (str: string, substr: string) => {
    return str
        .split(/,\s*/)
        .filter(value => value.toLowerCase().trim() !== substr.toLowerCase())
        .join(', ')
}