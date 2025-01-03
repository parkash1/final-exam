import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddFormComponent from './components/AddFormComponent'
import CardComponent from './components/CardComponent'
import AwardListComponent from './components/AwardListComponent'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      <AddFormComponent />
       <CardComponent />
      <AwardListComponent />
    </>
  )
}

export default App
