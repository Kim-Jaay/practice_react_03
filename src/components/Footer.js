import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Footer.scss'
import COMPANY from '../data/company'


const Footer = () => {
    return (
        <footer className="Footer">
            <div className="inner">
                <div className="top">
                    <dl>
                        <dt>온라인 입장권</dt>
                        <dd><Link to='/'>티켓 구매하기</Link></dd>
                        <dd><Link to='/'>연간회원권</Link></dd>
                        <dd><Link to='/'>제휴 할인정보</Link></dd>
                        <dd><Link to='/'>학생 단체예약</Link></dd>
                        <dd><Link to='/'>일반 단체예약</Link></dd>
                    </dl>
                    <dl>
                        <dt>SEALIFE 부산</dt>
                        <dd><Link to='/'>운영시간</Link></dd>
                        <dd><Link to='/'>위치 & 교통</Link></dd>
                        <dd><Link to='/'>자주 묻는 질문</Link></dd>
                        <dd><Link to='/'>안전수칙</Link></dd>
                        <dd><Link to='/'>장애인 편의시설</Link></dd>
                    </dl>
                    <dl>
                        <dt>회사소개</dt>
                        <dd><Link to='/'>인사말</Link></dd>
                        <dd><Link to='/'>연혁</Link></dd>
                        <dd><Link to='/'>기업비전</Link></dd>
                        <dd><Link to='/'>최신뉴스</Link></dd>
                        <dd><Link to='/'>인재채용</Link></dd>
                        <dd><Link to='/'>협력업체</Link></dd>
                    </dl>
                    <dl>
                        <dt>정책</dt>
                        <dd><Link to='/'>이용약관</Link></dd>
                        <dd><Link to='/'>개인정보처리방침</Link></dd>
                        <dd><Link to='/'>마케팅 정보사용</Link></dd>
                        <dd><Link to='/'>제휴문의</Link></dd>
                        <dd><Link to='/'>장애인 편의시설</Link></dd>
                    </dl>

                </div>
                <div className="bot">
                    <dl className='left'>
                        <dt>{COMPANY.name}</dt>
                        <dd>{COMPANY.address}</dd>
                        <dd>사업자등록번호 {COMPANY.number} 대표이사 {COMPANY.ceo} 통신판매업신고번호{COMPANY.sell_num}</dd>
                        <dd>{COMPANY.num}</dd>
                    </dl>
                    <ul className="right">
                        <li><a href="https://www.youtube.com/user/BusanAquarium" target="_blank"><i className='xi-youtube-play'></i></a></li>
                        <li><a href="https://www.facebook.com/sealifebusanaquarium" target='_blank'><i className='xi-facebook'></i></a></li>
                        <li><a href="https://www.instagram.com/sealifebusan/" target='_black'><i className='xi-instagram'></i></a></li>
                        <li><a href="http://blog.naver.com/blueloveba" target='_blank'><i className='xi-naver'></i></a></li>
                    </ul>

                </div>
            </div>
        </footer>
    )
}

export default Footer