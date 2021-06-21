import BnbLogo from 'src/config/assets/token_bnb.svg'
import { EnvironmentSettings, ETHEREUM_NETWORK, FEATURES, NetworkConfig, WALLETS } from 'src/config/networks/network.d'

const baseConfig: EnvironmentSettings = {
  clientGatewayUrl: 'https://safe-client.bsc.gnosis.io/v1',
  txServiceUrl: 'https://safe-transaction.bsc.gnosis.io/api/v1',
  safeUrl: 'https://bsc.gnosis-safe.io/app',
  safeAppsUrl: 'https://safe-apps-bsc.staging.gnosisdev.com',
  gasPriceOracle: {
    url: 'https://bscgas.info/gas',
    gasParameter: 'standard',
  },
  rpcServiceUrl: 'https://bsc-dataseed.binance.org',
  networkExplorerName: 'BscScan',
  networkExplorerUrl: 'https://www.bscscan.com',
  networkExplorerApiUrl: 'https://www.bscscan.com/api',
}

const mainnet: NetworkConfig = {
  environment: {
    dev: {
      ...baseConfig,
    },
    staging: {
      ...baseConfig,
    },
    production: {
      ...baseConfig,
      safeAppsUrl: 'https://apps-bsc.gnosis-safe.io',
    },
  },
  network: {
    id: ETHEREUM_NETWORK.BINANCE,
    backgroundColor: '#d0980b',
    textColor: '#ffffff',
    label: 'Binance',
    isTestNet: false,
    nativeCoin: {
      address: '0x0000000000000000000000000000000000000000',
      name: 'Binance Coin',
      symbol: 'BNB',
      decimals: 18,
      logoUri: BnbLogo,
    },
  },
  disabledWallets: [
    WALLETS.TREZOR,
    WALLETS.LEDGER,
    WALLETS.WALLET_CONNECT,
    WALLETS.COINBASE,
    WALLETS.FORTMATIC,
    WALLETS.OPERA,
    WALLETS.OPERA_TOUCH,
    WALLETS.PORTIS,
    WALLETS.TORUS,
    WALLETS.TRUST,
    WALLETS.WALLET_LINK,
    WALLETS.AUTHEREUM,
    WALLETS.LATTICE,
  ],
  disabledFeatures: [FEATURES.DOMAIN_LOOKUP],
}

export default mainnet
