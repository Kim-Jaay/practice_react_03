import React from 'react'
import '../css/MainCon.scss'
import MAIN_CONTENT from '../data/MainContent'
import { Link } from 'react-router-dom'

export const MainCon = () => {
    return (
        <section className="MainCon sc">
            <div className="inner">
                <h2>씨라이프 부산 전시존 안내</h2>
                <p>체험 활등을 위한 바다거북 구조대, 세계 일류의 디지털 기술로 구현한 씨엣나잇 (Sea at Night) 까지,<br />
                    가족 여행부터 데이트까지 완벽한 해운대 아쿠아리움의 전시존을 소개합니다.</p>
                <div className='Main_exhibit'>
                    {
                        MAIN_CONTENT.map((it, id) => {
                            return (
                                <figure className={`itm0${it.id}`} key={it.id}>
                                    <img src={process.env.PUBLIC_URL + `/assets/MainCon0${it.id}.png`} alt="" />
                                    <h3>{it.title}</h3>
                                    <p>{it.des}</p>
                                    <Link to='/ticket'>온라인티켓 예매하기</Link>
                                </figure>
                            )
                        })
                    }
                </div>

            </div>
        </section>
    )
}

export default MainCon
