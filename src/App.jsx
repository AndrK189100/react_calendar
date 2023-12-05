//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Calendar } from './components/calendar/calendar'

function App() {
  //const [count, setCount] = useState(0)

  const date  = new Date(2023, 1 ,9);

  return (
    
      <Calendar date={date}/>
        
  )
}

export default App
