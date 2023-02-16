import { useState } from 'react'
import Logo from './assets/logo.svg'
import logo from './assets/bani.svg'
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
          <div className='lab'>
            <label htmlFor="email">Email</label> <br />
            <input type="email" />
          </div>
          
            <p className='pas'>Password</p>
            <p className='spanF'>Forget Password</p> 
        
          <input type="password" className='place'/>
          

          <button>Login</button>

        </div>
      </div>
    </div>
  )
}

export default App
