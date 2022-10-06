import { useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { injected } from '../../lib/connectors'

const useEagerConnect = (networks: Network[], callback: (eventType: EventType, message: string) => void) => {
  const { activate, active } = useWeb3React()
  const [tried, setTried] = useState(false)

  useEffect(() => {
    injected(networks)
      .isAuthorized()
      .then((isAuthorized) => {
        if (isAuthorized)
          activate(injected(networks), undefined, true)
            .then(() => callback('CONNECTED', 'connected'))
            .catch(() => setTried(true))
        else setTried(true)
      })
  }, [activate])

  useEffect(() => {
    if (!tried && active) setTried(true)
  }, [tried, active])

  return tried
}

export { useEagerConnect }
