import React, { useState } from 'react';
import {FaBars , FaReact} from 'react-icons/fa';
import {HiX} from 'react-icons/hi'
import {Link} from 'react-router-dom';

const data = [
    {
        label : 'Home',
        to : '/'
    },
    {
        label : 'About Me',
        to : '/about'
    },
    {
        label : 'Skills',
        to : '/skills'
    },
    {
        label : 'Resume',
        to : '/resume'
    },
    {
        label : 'Portfolio',
        to : '/portfolio'
    },
    {
        label : 'Contact',
        to : '/contact'
    },
]

export default function Navbar() {

    const [toggleIcon, setToggleIcon] = useState(false)

    const handelToggleIcon =()=>{
        setToggleIcon(!toggleIcon);
    };
  return (
    <div>
        <nav className='navbar'>
            <div className='navbar__container'>

            <Link to={"/"} className='navbar__container__logo'>
                <FaReact size={30}/>
            </Link>

            </div>
            <ul className='navbar__container__menu'>
            {
                data.map((item, key)=> (
                    <li key={key} className='navbar__container__menu__item'>
                        <Link className='navbar__container__menu__item__links' to={item.to}>
                            {item.label}

                        </Link>
                    </li>
                ))
            }

            </ul>
            <div className='nav-icon' onClick={handelToggleIcon}>
            {
                toggleIcon ? <HiX size={30}/> : <FaBars size={30}/>
            }

            </div>

        </nav>
    </div>
  )
}
