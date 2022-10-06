const switchNetwork = (chainId: number, callback: (eventType: EventType, message: string) => void) => {
  const { ethereum } = window
  ethereum
    .request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: `0x${chainId.toString(16)}` }],
    })
    .then(() => {
      callback('SWITCHED_NETWORK', 'switched network')
    })
    .catch((e: Error) => {
      callback('SWITCH_NETWORK_ERROR', e.message)
    })
}

export { switchNetwork }
