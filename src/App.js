import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import ToTop from './components/ToTop'



const App = () => {
  return (
    <>
      <div className='wapper'>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
        <Footer />
        <ToTop />
      </div>
    </>
  )
}

export default App