import React from 'react'
import '../css/Show.scss'
import { Link } from 'react-router-dom'

const Show = () => {
    return (
        <div className='Show'>
            <div className="banner">
                <img src={process.env.PUBLIC_URL + '/assets/banner01.png'} alt="" />
                <h2>SEA LIFE Performance info</h2>
            </div>
            <div className="show_con sc">
                <div className="inner">
                    <h2>바다거북 구조대</h2>
                    <p>구조부터 이름짓기, 엑스레이 촬영, 치료. 마지막 바다로 돌려보내기까지!<br />
                        실제 구조활동과 유사한 바다거북 구조대 전시존에서 다양한 체험활동으로 하루순삭,<br />
                        여러분도 부산아쿠아리움에서 바다거북 구조대가 되어보세요!</p>
                </div>
                <div className="show_con_img">
                    <img src={process.env.PUBLIC_URL + '/assets/show_con.png'} alt="" />
                    <div className="inner">
                        <strong>SEA TURTLE</strong>
                    </div>
                </div>
                <div className="des">
                    <div className="inner">
                        <span>RESCUE TEAM</span>
                        <p>구조부터 이름짓기, 엑스레이 촬영, 치료. 마지막 바다로 돌려보내기까지!<br />
                            실제 구조활동과 유사한 바다거북 구조대 전시존에서 다양한 체험활동으로 하루순삭, <br />
                            여러분도 부산아쿠아리움에서 바다거북 구조대가 되어보세요!</p>
                    </div>
                </div>

                <div className="gallery">
                    <div className="inner">
                        <h2>Exhibition Gallery</h2>
                        <p>실제 구조활동과 유사한 바다거북 구조대 전시존에서 다양한 체험으로<br />
                            부산아쿠아리움에서 바다거북 구조대가 되어보세요!</p>
                        <div className="img">
                            <img src={process.env.PUBLIC_URL + '/assets/show_gall01.png'} alt="" />
                            <img src={process.env.PUBLIC_URL + '/assets/show_gall02.png'} alt="" />
                            <img src={process.env.PUBLIC_URL + '/assets/show_gall03.png'} alt="" />
                        </div>
                        <div className="button">
                            <Link to='/ticket'>온라인 예약하기</Link>
                        </div>

                    </div>
                </div>
            </div>







        </div>
    )
}

export default Show