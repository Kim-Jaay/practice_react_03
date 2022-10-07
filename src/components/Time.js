import React from 'react'
import '../css/Time.scss'

const Time = () => {
    return (
        <div className='Time'>
            <div className="inner">
                <h2>SEALIFE 부산아쿠아리움 운영시간</h2>
                <p>SEA LIFE 부산아쿠아리움은 연중무휴입니다.</p>
                <div className="con">
                    <div>
                        <img src={process.env.PUBLIC_URL + '/assets/time1.png'} alt="" />
                        <h3>평일</h3>
                        <p>10:00 - 19:00</p>
                        <span>마지막 입장 6시</span>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/assets/time2.png'} alt="" />
                        <h3>주말 및 공휴일</h3>
                        <p>10:00 - 20:00</p>
                        <span>마지막 입장 7시</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Time