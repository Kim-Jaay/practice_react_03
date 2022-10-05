import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import MainVisual from './components/MainVisual'
import Footer from './components/Footer'
import ToTop from './components/ToTop'



const App = () => {
  return (
    <>
      <div className='wapper'>
        <Header />
        <Routes>
          <Route path='/' element={<MainVisual />} />
        </Routes>
        <Footer />
        <ToTop />
      </div>
    </>
  )
}

export default App