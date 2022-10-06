import React, { useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import '../css/MainConSlide.scss'

const MainConSlide = () => {
    const MainConSlide = useRef(null);
    return (
        <section className='MainCon'>
            <div className="inner">
                <h2>For Marine Life</h2>
                <p>사람과 자연이 더불어 사는 즐거운 세상을 꿈꾸는 아쿠아리움<br />
                    깊고 드넓은 해양 생태계 그대로를 재현하겠다는 신념과 고집으로<br />
                    지금까지의 아쿠아리움에 대한 모든 기준을 버리고 해양생물의 입장이 되어,<br />
                    당신의 입장이 되어 원점에서부터 시작합니다.
                </p>
                <div className="slideArrows">
                    <img src={process.env.PUBLIC_URL + '/assets/main_con_arrow_01.png'} alt=""
                        onClick={() => MainConSlide.current.slickPrev()} />
                    <img src={process.env.PUBLIC_URL + '/assets/main_con_arrow_02.png'} alt=""
                        onClick={() => MainConSlide.current.slickNext()} />
                </div>
            </div>
            <div className="MainConSlide">
                <Slider
                    arrows={false}
                    autoplay={true}
                    pauseOnHover={false}
                    slidesToShow={3}
                    ref={MainConSlide}
                >
                    <img src={process.env.PUBLIC_URL + '/assets/Marine_slide_01.png'} alt="" />
                    <img src={process.env.PUBLIC_URL + '/assets/Marine_slide_02.png'} alt="" />
                    <img src={process.env.PUBLIC_URL + '/assets/Marine_slide_03.png'} alt="" />
                    <img src={process.env.PUBLIC_URL + '/assets/Marine_slide_01.png'} alt="" />
                    <img src={process.env.PUBLIC_URL + '/assets/Marine_slide_02.png'} alt="" />
                    <img src={process.env.PUBLIC_URL + '/assets/Marine_slide_03.png'} alt="" />
                </Slider>
            </div>
        </section >
    )
}

export default MainConSlide