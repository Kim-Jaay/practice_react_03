import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import MainVisual from './components/MainVisual'
import Footer from './components/Footer'
import ToTop from './components/ToTop'
import Main from './pages/Main'


const App = () => {
  return (
    <>
      <div className='wapper'>
        <Header />
        <Routes>
          <Route path='/' element={<MainVisual />} />
        </Routes>
        <Main />

        <Footer />
        <ToTop />
      </div>
    </>
  )
}

export default App