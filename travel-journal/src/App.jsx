import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import data from './data'
import Experience from './Components/Experiences'
function App() {
const dateElements = data.map(item=>{
  return <Experience
    key = {item.id}
    item ={item}
    />
  
})
  return (
    <>
    <NavBar/>
    <section className='expericene'>
      {dateElements}
    </section>
    </>
  )
}

export default App
