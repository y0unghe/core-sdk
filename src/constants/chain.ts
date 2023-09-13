import { ChainId } from '../enums'
import { ChainKey } from '../enums'

export const CHAIN_KEY: { [chainId: number]: ChainKey } = {
  [ChainId.ETHEREUM]: ChainKey.ETHEREUM,
  [ChainId.ROPSTEN]: ChainKey.ROPSTEN,
  [ChainId.RINKEBY]: ChainKey.RINKEBY,
  [ChainId.GÖRLI]: ChainKey.GÖRLI,
  [ChainId.BASE_GOERLI]: ChainKey.BASE_GOERLI,
  [ChainId.SHIBARIUM_PUPPY]: ChainKey.SHIBARIUM_PUPPY,
  [ChainId.SHIBARIUM]: ChainKey.SHIBARIUM,
  [ChainId.KOVAN]: ChainKey.KOVAN,
  [ChainId.MATIC]: ChainKey.MATIC,
  [ChainId.MATIC_TESTNET]: ChainKey.MATIC_TESTNET,
  [ChainId.FANTOM]: ChainKey.FANTOM,
  [ChainId.FANTOM_TESTNET]: ChainKey.FANTOM_TESTNET,
  [ChainId.XDAI]: ChainKey.XDAI,
  [ChainId.BSC]: ChainKey.BSC,
  [ChainId.BSC_TESTNET]: ChainKey.BSC_TESTNET,
  [ChainId.ARBITRUM]: ChainKey.ARBITRUM,
  [ChainId.ARBITRUM_TESTNET]: ChainKey.ARBITRUM_TESTNET,
  [ChainId.MOONBEAM_TESTNET]: ChainKey.MOONBEAM_TESTNET,
  [ChainId.AVALANCHE]: ChainKey.AVALANCHE,
  [ChainId.AVALANCHE_TESTNET]: ChainKey.AVALANCHE_TESTNET,
  [ChainId.HECO]: ChainKey.HECO,
  [ChainId.HECO_TESTNET]: ChainKey.HECO_TESTNET,
  [ChainId.HARMONY]: ChainKey.HARMONY,
  [ChainId.HARMONY_TESTNET]: ChainKey.HARMONY_TESTNET,
  [ChainId.OKEX]: ChainKey.OKEX,
  [ChainId.OKEX_TESTNET]: ChainKey.OKEX_TESTNET,
  [ChainId.CELO]: ChainKey.CELO,
  [ChainId.PALM]: ChainKey.PALM,
  [ChainId.PALM_TESTNET]: ChainKey.PALM_TESTNET,
  [ChainId.MOONRIVER]: ChainKey.MOONRIVER,
  [ChainId.FUSE]: ChainKey.FUSE,
  [ChainId.TELOS]: ChainKey.TELOS,
  [ChainId.MOONBEAM]: ChainKey.MOONBEAM,
  [ChainId.OPTIMISM]: ChainKey.OPTIMISM,
  [ChainId.KAVA]: ChainKey.KAVA,
  [ChainId.METIS]: ChainKey.METIS,
  [ChainId.ARBITRUM_NOVA]: ChainKey.ARBITRUM_NOVA,
  [ChainId.BOBA_AVAX]: ChainKey.BOBA_AVAX,
  [ChainId.SCROLL_SEPOLIA]: ChainKey.SCROLL_SEPOLIA,
  [ChainId.MANTA_TESTNET]: ChainKey.MANTA_TESTNET,
  [ChainId.MANTA]: ChainKey.MANTA

}
