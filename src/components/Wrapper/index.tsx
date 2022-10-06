import { FunctionComponent } from 'react'
import { providers } from 'ethers'
import { Web3ReactProvider } from '@web3-react/core'
import { Wallet } from '../Wallet'

const Wrapper: FunctionComponent = () => {
  const getLibrary = (provider: providers.ExternalProvider | providers.JsonRpcFetchFunc) => {
    const library = new providers.Web3Provider(provider)
    library.pollingInterval = 12000
    return library
  }

  const networks: Network[] = [
    { chainId: 1, name: 'Mainnet', icon: 'eth-diamond-black-white.jpeg' },
    { chainId: 5, name: 'Goerli', icon: 'eth-diamond-black-white.jpeg' },
  ]

  const callback = (eventType: any, message: string) => {
    console.log('callback is called:', eventType, message)
  }

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Wallet networks={networks} callback={callback} />
    </Web3ReactProvider>
  )
}

export default Wrapper
