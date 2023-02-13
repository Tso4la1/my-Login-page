import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <img src="" alt="" />
      <div>
        <h1>Log in to your account</h1>
        <div>
          <p> Don't have an account? </p>
          <span>Get Started</span>
        </div>
        <label htmlFor="email">Email</label>
        <input type="email" />
        <div>
          <p>Password</p>
          <p>Forget Password</p>
          <input type="password" />
        </div>
        <button>Login</button>
      </div>
    </div>
  )
}

export default App
