import { ChainId } from '../enums/ChainId'

export const INIT_CODE_HASH: { [chainId: number]: string } = {
  [ChainId.ETHEREUM]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.GÖRLI]: '0x3fcbca18b347a00ba401fcf2e76e43c71348cb8dc5792dea044eeb69c55d6362',
  [ChainId.ARBITRUM]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
}
