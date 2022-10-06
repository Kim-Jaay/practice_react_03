import React from 'react'
import '../css/MainVisual.scss'
import { Link } from 'react-router-dom'

const MainVisual = () => {
    return (
        <div className="MainVisual">
            <div className="inner">
                <div className="top">
                    <img src={process.env.PUBLIC_URL + '/assets/Main01.png'} alt="" />
                    <strong>Sealife <span>Busan</span></strong>
                </div>
                <div className="mid">
                    <strong>AQUARIUM</strong>
                    <img src={process.env.PUBLIC_URL + '/assets/Main02.png'} alt="" />
                </div>
                <div className="bot">
                    <img src={process.env.PUBLIC_URL + '/assets/Main03.png'} alt="" />
                    <strong>Ocean</strong>

                </div>

            </div>

            <div className='button'>
                <img src={process.env.PUBLIC_URL + '/assets/Main_cir01.png'} alt="" className='cir01' />
            </div >
            <Link to='/ticket'>
                <img src={process.env.PUBLIC_URL + '/assets/Main_cir02.png'} alt="" className='cir02' />
            </Link>




        </div >
    )
}

export default MainVisual