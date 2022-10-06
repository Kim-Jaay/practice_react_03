import React from 'react'

const Sealife = () => {
    return (
        <div className='Sealife'>
            <div className="banner">
                <img src={process.env.PUBLIC_URL + '/assets/banner03.png'} alt="" />
                <h2>SEA LIFE BUSAN</h2>
            </div>
        </div>
    )
}

export default Sealife