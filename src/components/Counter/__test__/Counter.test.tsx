import { describe, expect, it } from 'vitest'
import { render, screen, userEvent } from '@/utils/test-utils'
import Counter from '../index'

describe('Counter component', () => {
  it('Counter render', async () => {
    render(<Counter />)
    expect(screen.getByText(/Hello Vite \+ React!/i)).toBeInTheDocument()
  })
  //
  it('Counter render with count', async () => {
    render(<Counter />)
    expect(screen.getByText(/count by useState: 0/i)).toBeInTheDocument()
    // click button by useState
    await userEvent.click(screen.getByText(/count by useState: 0/i))
    expect(screen.getByText(/count by useState: 1/i)).toBeInTheDocument()

    // click button by useState
    await userEvent.click(screen.getByText(/count by useState: 1/i))
    expect(screen.getByText(/count by useState: 2/i)).toBeInTheDocument()
  })

  it('Counter render with count by useReducer', async () => {
    render(<Counter />)
    expect(screen.getByText(/count by Rtk : 0/i)).toBeInTheDocument()
    // click button by count by Rtk
    await userEvent.click(screen.getByText(/count by Rtk : 0/i))
    expect(screen.getByText(/count by Rtk : 1/i)).toBeInTheDocument()
  })
})
