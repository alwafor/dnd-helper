export function Validate(formValue: string) {
    return {
        integer() {
            let parsed = Number.parseInt(formValue)
            formValue = Number.isNaN(parsed) ? '' : parsed.toString()
            return this
        },

        max(max: number) {
            formValue = formValue && Math.min(+formValue, max).toString()
            return this
        },

        run() {
            return formValue
        }
    }
}

export const maxInt = (formValue: string) => Validate(formValue).integer().max(999999).run()