import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Facility from './Facility'
import Location from './Location'
import SealifeTab from './SealifeTab'
import Time from './Time'

const Sealife = () => {
    return (
        <div className='Sealife'>
            <div className="banner">
                <img src={process.env.PUBLIC_URL + '/assets/banner03.jpg'} alt="" />
                <h2>SEA LIFE BUSAN</h2>
            </div>

            <div className="tab sc">
                <div className="inner">
                    <SealifeTab />
                    <Routes>
                        <Route path='/' element={<Location />} />
                        <Route path='location' element={<Location />} />
                        <Route path='time' element={<Time />} />
                        <Route path='facility' element={<Facility />} />
                    </Routes>
                </div>
            </div>


        </div>
    )
}

export default Sealife