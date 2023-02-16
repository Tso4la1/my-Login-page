import { useState } from 'react'
import Logo from './assets/logo.svg'
import './App.css'

function App() {
  const [reveal, setReveal] = useState(false)

  const togglePsw = () => {
    setReveal(!reveal);
  };
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
        
          <input className='place' type={reveal ? "text" : "password"} name="" /><svg
                width="20"
                height="20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="hidden-psw"
                onClick={togglePsw}
              >
                <path
                  d="M12.983 10A2.98 2.98 0 0 1 10 12.983 2.98 2.98 0 0 1 7.017 10 2.98 2.98 0 0 1 10 7.017 2.98 2.98 0 0 1 12.983 10Z"
                  stroke="#65717C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M10 16.892c2.942 0 5.683-1.734 7.592-4.734.75-1.175.75-3.15 0-4.325-1.909-3-4.65-4.733-7.592-4.733-2.942 0-5.683 1.733-7.592 4.733-.75 1.175-.75 3.15 0 4.325 1.909 3 4.65 4.734 7.592 4.734Z"
                  stroke="#C1C1C1"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
          </svg>
       
          
              <a href="https://glowing-gnome-fd582e.netlify.app/dashboard">
            <button>Login</button>
            </a>

        </div>
      </div>
    </div>
  )
}

export default App
