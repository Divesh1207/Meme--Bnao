import { useState } from 'react'

import './App.css'


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Components/Pages/HomePage'
import Edit from './Components/Pages/Edit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <h1 className='text-2xl '>Meme Generator</h1>
        <Routes>
          <Route path='/' element={< HomePage />}> </Route>
          <Route path='/edit' element={<Edit />}></Route>


        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
