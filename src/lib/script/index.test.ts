import { script } from '.'

jest.setTimeout(1000)

describe('script', () => {
  it('test', async () => {
    const res = script()
    expect(res).toBe('hello world!')
  })
})
