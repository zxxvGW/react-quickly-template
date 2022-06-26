import { render, screen } from '@/utils/test-utils'
import App from './App'
describe('App component', () => {
  it('app render', async () => {
    render(<App />)
    expect(screen.getByRole('heading'))
  })
})
