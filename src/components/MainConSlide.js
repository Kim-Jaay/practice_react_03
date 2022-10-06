import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'

const MainConSlide = () => {
    return (
        <div>
            <div className="MainConSlide">
                <Slider
                    arrows={false}
                    autoplay={true}
                    pauseOnHover={false}
                    slidesToShow={2.5}
                >
                    <img src={process.env.PUBLIC_URL + '/assets/Marine_slide_01.png'} alt="" />
                    <img src={process.env.PUBLIC_URL + '/assets/Marine_slide_02.png'} alt="" />
                    <img src={process.env.PUBLIC_URL + '/assets/Marine_slide_03.png'} alt="" />
                </Slider>
            </div>
        </div >
    )
}

export default MainConSlide