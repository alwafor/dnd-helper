export const addPlusToPositive = (n: number) => n > 0 ? '+' + n : String(n)

export const removeSubstringFromStringWithComas = (str: string, substr: string) => {
    let result = str.replace(new RegExp(`,?\\s*${substr}`, 'i'), '')
    let resultSplit = result.split(/,\s*/)

    if (resultSplit.length === 2 && resultSplit[0] === '')
        result = result.replace(/,\s*/, '')

    return result
}