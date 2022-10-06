import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Button } from '.'

describe('test', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    render(<Button message="hello world!" />)
  })
  it('button text', () => {
    expect(screen.queryByTestId('button')).toHaveTextContent('click me!')
  })
})
