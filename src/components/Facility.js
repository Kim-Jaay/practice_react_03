import React from 'react'
import '../css/Facility.scss'

const Facility = () => {
    return (
        <div className='Facility'>
            <div className="inner">
                <h2>장애인 편의시설</h2>
                <p>부산아쿠아리움은 3층 건물로 되어있으며
                    엘리베이터가 있어 휠체어 이동이 가능합니다</p>
                <div className="con">
                    <div>
                        <img src={process.env.PUBLIC_URL + '/assets/faci1.png'} alt="" />
                        <h3>휠체어를 사용할 수 있나요?</h3>
                        <p>지상1층, 지하 3층 건물로 되어있으며 각 층마다 엘리베이터가 있어 이동이 가능합니다</p>

                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/assets/faci2.png'} alt="" />
                        <h3>휠체어를 대여할 수 있나요?</h3>
                        <p>네, 휠체어 대여가 가능합니다. 다만, 매표소에서 대여 가능여부를 확인한 뒤에 가능합니다</p>

                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/assets/faci3.png'} alt="" />
                        <h3>휠체어 입구는 어디에 있나요?</h3>
                        <p>매표소 정면의 안내데스크 옆의 엘리베이터를 이용하시면 입장할수 있습니다.</p>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Facility