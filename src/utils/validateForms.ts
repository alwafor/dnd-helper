export function Validate(formValue: string) {
    return {
        integer() {
            let parsed = Number.parseInt(formValue)
            formValue = Number.isNaN(parsed) ? '0' : parsed.toString()
            return this
        },

        max(max: number) {
            formValue = formValue && Math.min(+formValue, max).toString()
            return this
        },

        min(min: number) {
            formValue = formValue && Math.max(+formValue, min).toString()
            return this
        },

        run() {
            return formValue
        }
    }
}

export const min0max999999 = (value: string) => Validate(value).integer().min(0).max(999999).run()