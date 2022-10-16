import { useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { injected } from '../lib/connectors'
import { Network } from '../types'

const useInactiveListener = (suppress: boolean, networks: Network[]) => {
  const { active, error, activate } = useWeb3React()

  useEffect(() => {
    const { ethereum } = window
    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleConnect = () => {
        console.error('handleConnect is called')
        activate(injected(networks))
      }
      const handleChainChanged = (chainId: string | number) => {
        console.log('handleChainChanged is called. chainId:', chainId)
        activate(injected(networks))
      }
      const handleAccountsChanged = (accounts: string[]) => {
        console.log('handleAccountsChanged is called. accounts:', accounts)
        if (accounts.length > 0) activate(injected(networks))
      }
      const handleNetworkChanged = (networkId: string | number) => {
        console.log('handleNetworkChanged is called. networkId:', networkId)
        activate(injected(networks))
      }

      ethereum.on('connect', handleConnect)
      ethereum.on('chainChanged', handleChainChanged)
      ethereum.on('accountsChanged', handleAccountsChanged)
      ethereum.on('networkChanged', handleNetworkChanged)

      if (ethereum.removeListener) {
        ethereum.removeListener('connect', handleConnect)
      }
    }
  }, [active, error, suppress, activate])
}

export { useInactiveListener }
