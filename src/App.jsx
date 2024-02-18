import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Read from './components/Read'
import Update from './components/Update'
import Form from './components/Form'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/read/:id' element={<Read/>}/>
          <Route path='/update/:id' element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
