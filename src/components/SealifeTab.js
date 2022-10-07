import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Tab from '../data/SealifeTab'
import '../css/SealifeTab.scss'


const SealifeTab = () => {

    const [isActive, setIsActive] = useState(true);
    const handleClick = e => {
        setIsActive(current => !current);
    };


    return (
        <ul className="sealife_tab">{
            Tab.map((it, idx) => {
                return (
                    <li className='on' key={idx}>
                        <Link to={it.link}>{it.menu}</Link>
                    </li>
                )
            })
        }
        </ul>
    )
}

export default SealifeTab