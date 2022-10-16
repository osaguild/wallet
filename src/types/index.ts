type Network = {
  chainId: number
  name: string
  icon: string
}

type EventType = 'CONNECTED' | 'CONNECT_ERROR' | 'UNKNOWN_ERROR' | 'SWITCHED_NETWORK' | 'SWITCH_NETWORK_ERROR'

export type { Network, EventType }
