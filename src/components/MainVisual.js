import React from 'react'
import '../css/MainVisual.scss'

const MainVisual = () => {
    return (
        <div className="MainVisual">
            <div className="inner">
                <div className="top">
                    <img src={process.env.PUBLIC_URL + '/assets/Main01.png'} alt="" />
                    <p>Sealife <span>Busan</span></p>
                </div>
                <div className="mid">
                    <p>AQUARIUM</p>
                    <img src={process.env.PUBLIC_URL + '/assets/Main02.png'} alt="" />
                </div>
                <div className="bot">
                    <img src={process.env.PUBLIC_URL + '/assets/Main03.png'} alt="" />
                    <p>Ocean</p>
                </div>
            </div>
        </div>
    )
}

export default MainVisual