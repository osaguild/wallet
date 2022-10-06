import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Wallet } from '../Wallet'

describe('test', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    const networks: Network[] = [
      { chainId: 1, name: 'Mainnet', icon: 'eth-diamond-black-white.jpeg' },
      { chainId: 5, name: 'Goerli', icon: 'eth-diamond-black-white.jpeg' },
    ]

    const callback = (eventType: any, message: string) => {
      console.log('callback is called:', eventType, message)
    }

    render(<Wallet networks={networks} callback={callback} />)
  })
  it('test', () => {
    expect(screen.queryByTestId('wallet-connect')).toHaveTextContent('connect')
  })
})
