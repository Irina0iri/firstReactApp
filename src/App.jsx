import { useState } from 'react'
import devmindLogo from './assets/devmind.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(3)

    return (
    <>
      <div>
        <a href="https://google.com" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://www.devmind.ro/" target="_blank">
          <img src={devmindLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + Devmind</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 3)}>
          count is {count}
        </button>
        <p>
          Welcome! this is my first react app
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
