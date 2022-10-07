import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <div className="container">
        <div className="container--contents">
          <img src={reactLogo} className="logo react" alt="React logo" />
          <Info />
          <About />
          <Interests />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
