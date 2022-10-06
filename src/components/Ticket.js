import React from 'react'
import '../css/Ticket.scss'
import { Link } from 'react-router-dom'

const Ticket = () => {

    const ticketing = [
        { id: 1, title: '사전예약 할인권 (온라인)', price: '21,000', con: '대인(14세 이상)', },
        { id: 2, title: '해피타임 입장권 (온라인)', price: '19,500', con: '1인권 (대, 소인 구분없음)', },
        { id: 3, title: '온라인 특가 패키지 (온라인)', price: '29,000', con: '1인권 (대, 소인 구분없음)', },
        { id: 4, title: '기업체 입장권 (온라인)', price: '21,000', con: '대인(14세 이상)', },
    ]
    const rule = [
        { id: 1, des: '입장 시 QR코드를 보여주세요.' },
        { id: 2, des: '방문일 전 사전예약으로 풍성한 할인혜택.' },
        { id: 3, des: '36개월 미만 무료입장 가능.' },
        { id: 4, des: '전날까지 최대 5번 일정변경 가능.' },
    ]

    return (
        <div className='Ticket'>
            <div className="banner">
                <img src={process.env.PUBLIC_URL + '/assets/banner02.png'} alt="" />
                <h2>Online Ticketing</h2>
            </div>

            <div className="ticket_con sc">
                <div className="inner">
                    <h2>온라인 입장권</h2>
                    <p>부산 가족여행객을 위한 사전 예약 20% 할인, 해피타임 30% 할인 등<br />
                        씨라이프 부산 입장권을 합리적인 가격에 만나보세요.</p>
                    <div className="ticket_con_list">
                        {
                            ticketing.map((it, idx) => {
                                return (
                                    <figure>
                                        <img src={process.env.PUBLIC_URL + `/assets/ticket0${it.id}.png`} alt="" />
                                        <div className="des">
                                            <h2>{it.title}</h2>
                                            <strong>{it.price}</strong>
                                            <p>{it.con}</p>
                                            <ul className='rule'>
                                                {
                                                    rule.map((it, idx) => {
                                                        return (
                                                            <li key={idx}>- {it.des}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                            <div className="button">
                                                <Link to='/'>온라인 예약하기</Link>
                                            </div>
                                        </div>
                                    </figure>
                                )
                            })
                        }


                    </div>
                </div>
            </div>
            <div className="plan sc">
                <div className="inner">
                    <h2>방문일정 변경</h2>
                    <p>씨라이프부산 탐험 전, 갑작스러운 일정 변경이 필요하신가요?<br />
                        방문 전날까지 최대 5번 일정변경이 가능합니다.</p>
                    <div className="img">
                        <Link to='/show' className="imgbtn">
                            <img src={process.env.PUBLIC_URL + '/assets/plan01.png'} alt="" />
                            <div className="con">
                                <strong>방문일정 변경</strong>
                                <p>방문 전날까지 최대 5번 변경가능하며<br />
                                    당일 입장은 변경이 불가합니다.</p>
                            </div>
                        </Link>
                        <Link to='/show' className="imgbtn">
                            <img src={process.env.PUBLIC_URL + '/assets/plan02.png'} alt="" />
                            <div className="con">
                                <strong>공연일정 확인</strong>
                                <p>즐거운 공연 관람을 위해<br />
                                    공연일정을 확인바랍니다.</p>
                            </div>
                        </Link>
                    </div>
                </div>

            </div >
        </div >
    )
}

export default Ticket