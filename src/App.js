import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'

import Footer from './components/Footer'
import ToTop from './components/ToTop'
import Main from './pages/Main'
import Show from './components/Show'
import Ticket from './components/Ticket'
import Sealife from './components/Sealife'


const App = () => {
  return (
    <>
      <div className='Wrapper'>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/show' element={<Show />}></Route>
          <Route path='/ticket' element={<Ticket />}></Route>
          <Route path='/sealife' element={<Sealife />}></Route>
        </Routes>


        <Footer />
        <ToTop />
      </div>
    </>
  )
}

export default App