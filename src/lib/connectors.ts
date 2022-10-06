import { InjectedConnector } from '@web3-react/injected-connector'

const injected = (networks: Network[]) => {
  return new InjectedConnector({ supportedChainIds: networks.map((network) => network.chainId) })
}

export { injected }
