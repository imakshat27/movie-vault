import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Text text='hello'></Text>
      <Text text='world'></Text>
    </>
    
  )
}

function Text({text}) {
  return (
    <p>{text}</p>
  )
}

export default App
