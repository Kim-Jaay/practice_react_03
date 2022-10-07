import React from 'react'
import '../css/Location.scss'

const Location = () => {
    return (
        <div className="Location">
            <div className="inner">
                <h2>SEALIFE 부산아쿠아리움 오시는 길</h2>
                <p>부산아쿠아리움은 해운대 해수욕장에 위치해 있습니다.</p>
                <div className="con">
                    <div>
                        <img src={process.env.PUBLIC_URL + '/assets/location1.png'} alt="" />
                        <h3>위치</h3>
                        <p>부산광역시 해운대구<br />해운대 해변로 266 (중동)</p>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/assets/location2.png'} alt="" />
                        <h3>오시는 방법</h3>
                        <p>버스 또는 지하철로<br />쉽게 방문이 가능합니다.</p>
                    </div>
                    <div><img src={process.env.PUBLIC_URL + '/assets/location3.png'} alt="" />
                        <h3>도보 10분거리</h3>
                        <p>지하철 해운대역에서 도보<br />10분거리에 위치하고있습니다.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location