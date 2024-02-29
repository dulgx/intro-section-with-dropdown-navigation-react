import { useState } from 'react'
import './App.css'
import './nav-style.scss'
import './main-style.scss'
import Nav from './components/nav'
import Main from './components/main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Main />
    </>
  )
}

export default App;
