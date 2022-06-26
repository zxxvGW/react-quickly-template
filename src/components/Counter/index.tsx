import React, { FC, useState } from 'react'
import logo from '@/assets/svg/logo.svg'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { increment } from '@/store/reducer/counter'
import './style.css'

const Counter: FC = () => {
  const [count, setCount] = useState(0)
  const count2 = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div className="App" role={'heading'}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="loo" />
        <p className="font-bold underline">Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count by useState: {count}
          </button>
        </p>
        <p>
          <button type="button" onClick={() => dispatch(increment())}>
            count by Rtk : {count2}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}
export default Counter
