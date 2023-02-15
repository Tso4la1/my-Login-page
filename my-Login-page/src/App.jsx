import { useState } from 'react'
import Logo from './assets/logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="try"><img src={Logo} alt="{comopany-logo}" />
    <div className="App">
      
      <div className='divHead'>
        
          <h1>Log in to your account</h1>
          
          <div className='can'>
            <p> Don't have an account? </p>
            <span>Get Started</span>
          </div> 
          <label htmlFor="email">Email</label>
          <input type="email" />
          
            <p>Password</p>
            <p>Forget Password</p>
            <input type="password" />
          
          <button>Login</button>
       
      </div>
      </div>
      </div>
  )
}

export default App
