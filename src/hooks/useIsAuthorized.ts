import { useState, useEffect } from 'react'
import { injected } from '../lib/connectors'

const useIsAuthorized = (networks: Network[]) => {
  const [isAuthorized, setIsAuthorized] = useState(false)

  useEffect(() => {
    injected(networks)
      .isAuthorized()
      .then((isAuthorized) => {
        setIsAuthorized(isAuthorized)
      })
  }, [networks])

  return isAuthorized
}

export { useIsAuthorized }
