// @ts-ignore
import * as ord from '../Inflections/Ordinalize.ts'

declare global {
    interface Number {
        ordinalize(): string
    }

    interface String {
        ordinalize(): string
    }
}

Number.prototype.ordinalize = function (): string {
    return ord.convert(this, this.toString())
}

String.prototype.ordinalize = function (): string {
    return ord.convert(Number(this), this)
}
