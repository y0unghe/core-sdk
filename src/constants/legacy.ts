import { ChainId } from '../enums/ChainId'

export const INIT_CODE_HASH: { [chainId: number]: string } = {
  [ChainId.ETHEREUM]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.ROPSTEN]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.RINKEBY]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.GÖRLI]: '0x26dc3ede6e4848329644280108d2f224fcfdc651e62c27744ebe08748fbec5db',
  [ChainId.BASE_GOERLI]: '0x3fcbca18b347a00ba401fcf2e76e43c71348cb8dc5792dea044eeb69c55d6362',
  [ChainId.SHIBARIUM_PUPPY]: '0x26dc3ede6e4848329644280108d2f224fcfdc651e62c27744ebe08748fbec5db',
  [ChainId.ZETA_TESTNET]: '0x26dc3ede6e4848329644280108d2f224fcfdc651e62c27744ebe08748fbec5db',
  [ChainId.X1_TESTNET]: '0x26dc3ede6e4848329644280108d2f224fcfdc651e62c27744ebe08748fbec5db',
  [ChainId.KOVAN]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.FANTOM]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.MATIC]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.MATIC_TESTNET]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.XDAI]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.BSC]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.BSC_TESTNET]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.ARBITRUM]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.MOONBEAM_TESTNET]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.AVALANCHE]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.AVALANCHE_TESTNET]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.HECO]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.HECO_TESTNET]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.HARMONY]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.HARMONY_TESTNET]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.OKEX]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.OKEX_TESTNET]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.CELO]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.PALM]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.MOONRIVER]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.FUSE]: '0x1901958ef8b470f2c0a3875a79ee0bd303866d85102c0f1ea820d317024d50b5',
  [ChainId.TELOS]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.MOONBEAM]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.ARBITRUM_NOVA]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.BOBA_AVAX]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.SCROLL_SEPOLIA]: '0x26dc3ede6e4848329644280108d2f224fcfdc651e62c27744ebe08748fbec5db',
  [ChainId.SHIBARIUM]: '0x26dc3ede6e4848329644280108d2f224fcfdc651e62c27744ebe08748fbec5db',
  [ChainId.MANTA_TESTNET]: '0x26dc3ede6e4848329644280108d2f224fcfdc651e62c27744ebe08748fbec5db',
  [ChainId.MANTA]: '0x26dc3ede6e4848329644280108d2f224fcfdc651e62c27744ebe08748fbec5db',
  [ChainId.BLAST_TESTNET]: '0xd4114652239f5dc32cdfaa4f0f4dface194de3de0227742baf323648e9451868',
  [ChainId.TAIKO_TESTNET]: '0x26dc3ede6e4848329644280108d2f224fcfdc651e62c27744ebe08748fbec5db',
  [ChainId.SHARDEUM_SPHINX]: '0x26dc3ede6e4848329644280108d2f224fcfdc651e62c27744ebe08748fbec5db',
  [ChainId.ZETA]: '0x26dc3ede6e4848329644280108d2f224fcfdc651e62c27744ebe08748fbec5db',
  [ChainId.MERLIN_TESTNET]: '0x9c736bd41c29919e4e96b726a12ca390fe6bec6137543265e125b6d0a9652953'
}
