import React from 'react'
import { Link } from 'react-router-dom'
import '../css/TopBanner.scss'

const TopBanner = () => {
    const TOPMENU = [
        { id: 1, menu: '학생 단체문의', link: '/' },
        { id: 2, menu: '일반단체 및 기업제휴문의', link: '/' },
        { id: 3, menu: '해양생물보호', link: '/' },
        { id: 4, menu: '회사소개', link: '/' },
    ]
    return (
        <div className="TopBanner">
            <div className="inner">
                <span>금일 운영시간: 10:00 - 19:00 (마지막 입장 6시)</span>
                <ul className='top_menu'>
                    {
                        TOPMENU.map((it, id) => {
                            return (
                                <li key={it.id}>
                                    <Link to={it.link}>{it.menu}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default TopBanner