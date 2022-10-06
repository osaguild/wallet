import { FunctionComponent, useState, useEffect } from 'react'
import { providers } from 'ethers'
import { useWeb3React } from '@web3-react/core'
import { Button } from '@chakra-ui/react'
import { Network } from './Network'
import { useEagerConnect } from '../../hooks/EagerConnect'
import { useInactiveListener } from '../../hooks/InactiveListener'
import { convertToShortAddress, convertToShortEth } from '../../utils'
import { injected } from '../../lib/connectors'

interface WalletProps {
  networks: Network[]
  callback: (eventType: EventType, message: string) => void
}

const Wallet: FunctionComponent<WalletProps> = ({ networks, callback }) => {
  const [balance, setBalance] = useState<string>('? ETH')
  const { active, account, chainId, library, activate } = useWeb3React<providers.Web3Provider>()
  // after EagerConnect inactivate Listener
  useInactiveListener(useEagerConnect(networks, callback), networks)

  const connect = () => {
    activate(injected(networks), (e) => {
      // connect error
      callback('CONNECT_ERROR', e.message)
    }).then(() => {
      // connected
      callback('CONNECTED', 'connected')
    })
  }

  useEffect(() => {
    if (account && library)
      library
        .getBalance(account)
        .then((balance) => setBalance(`${convertToShortEth(balance)} ETH`))
        .catch((e) => {
          // get balance error.
          setBalance('?')
          callback('UNKNOWN_ERROR', e.message)
        })
  }, [account, library, chainId])

  return active ? (
    <>
      <Network networks={networks} callback={callback} />
      <Button w={160} mx={1} my={2}>
        {balance}
      </Button>
      <Button w={160} mx={1} my={2}>
        {convertToShortAddress(account as string)}
      </Button>
    </>
  ) : (
    <>
      <Network networks={networks} callback={callback} />
      <Button w={160} onClick={connect} mx={1} my={2}>
        connect
      </Button>
    </>
  )
}

export { Wallet, WalletProps }
