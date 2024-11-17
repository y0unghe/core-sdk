import { Currency } from '../Currency'
import { NativeCurrency } from '../NativeCurrency'
import { Token } from '../Token'
import { WNATIVE } from '../../constants/tokens'
import invariant from 'tiny-invariant'

export class Ton extends NativeCurrency {
    protected constructor(chainId: number) {
        super(chainId, 18, 'TON', 'Ton')
    }

    public get wrapped(): Token {
        const wnative = WNATIVE[this.chainId]
        invariant(!!wnative, 'WRAPPED')
        return wnative
    }

    private static _cache: { [chainId: number]: Ton } = {}

    public static onChain(chainId: number): Ton {
        return this._cache[chainId] ?? (this._cache[chainId] = new Ton(chainId))
    }

    public equals(other: Currency): boolean {
        return other.isNative && other.chainId === this.chainId
    }
}
