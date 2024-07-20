import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       Ecommerce Website
       <div style={ { margin : '10px', width : '300px', height : '300px' , color:'indigo' , backgroundColor : 'aliceblue' }}>
            Product-1
       </div>

       <div style={ { margin : '10px', width : '300px', height : '300px' , color:'indigo' , backgroundColor : 'aliceblue' }}>
            Product-2
       </div>

       <div style={ { margin : '10px', width : '300px', height : '300px' , color:'indigo' , backgroundColor : 'aliceblue' }}>
            Product-3
       </div>
    </>
  )
}

export default App
