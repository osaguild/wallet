import { InjectedConnector } from '@web3-react/injected-connector'
import { Network } from '../types'

const injected = (networks: Network[]) => {
  return new InjectedConnector({ supportedChainIds: networks.map((network) => network.chainId) })
}

export { injected }
