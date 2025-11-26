import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoIosMoon, IoMdSunny } from "react-icons/io";
import { Link, NavLink } from "react-router";
import { useEffect, useState } from "react";

export default function NavBar() {
    const [showNav, setShowNav] = useState(window.innerWidth < 600 ? false : true)
    const [darkTheme, setDarkTheme] = useState(localStorage.getItem('theme') || "")

    
    const closeNaveMenu = () => {
        if(window.innerWidth < 600) {
            setShowNav(false)
        } else {
            setShowNav(true)
        }
    }

    const changeTheme = () => {
        if(localStorage.getItem('theme') == 'dark') {
            localStorage.setItem('theme', '')
        } else {
            localStorage.setItem('theme', 'dark')
        }
        setDarkTheme(localStorage.getItem('theme'))
    }

    useEffect(() => { 
        document.body.className = localStorage.getItem('theme')
    }, [darkTheme])

    return (
        <nav>
            <div className="container nav__container">
                <Link to="/" className='nav_logo'>LOGIN</Link>
                    {showNav && <menu>
                        <NavLink to="/elections" onClick={closeNaveMenu}>Elections</NavLink>
                        <NavLink to="/results" onClick={closeNaveMenu}>  Results</NavLink>
                        <NavLink to="/logOut" onClick={closeNaveMenu}>  Logout</NavLink>
                    </menu>}

                    <button onClick={changeTheme} className="theme__toggle-btn">{darkTheme ? <IoMdSunny /> : <IoIosMoon />}</button>
                    <button onClick={() => {
                        setShowNav(!showNav)
                    }} className="nav__toggle-btn">{showNav ? <AiOutlineClose /> : <HiOutlineBars3 />}</button>
            </div> 
        </nav>
    )
}