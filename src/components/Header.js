import React from 'react'
import TopBanner from './TopBanner'
import { Link } from 'react-router-dom'
import MainNav from './MainNav'
import '../css/Header.scss'

const Header = () => {
    return (
        <header className="Header">
            <TopBanner />
            <div className="inner">
                <div className="gnb">
                    <h1>
                        <Link to='/'>
                            <img src={process.env.PUBLIC_URL + '/assets/logo.svg'} alt="" />
                        </Link>
                    </h1>
                    <nav>
                        <MainNav />
                    </nav>
                </div>
            </div>


        </header>
    )
}

export default Header