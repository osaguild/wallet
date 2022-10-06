import { FunctionComponent } from 'react'

interface ButtonProps {
  message: string
}

const Button: FunctionComponent<ButtonProps> = ({ message }) => {
  return (
    <button onClick={() => alert(message)} data-testid="button">
      click me!
    </button>
  )
}

export { Button, ButtonProps }
