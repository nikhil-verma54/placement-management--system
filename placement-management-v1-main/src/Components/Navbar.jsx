import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    const handleNav = (e) => {
        let targetClass = e.target
        let actualClass = targetClass.getAttribute("class")
        console.log();
        if (actualClass === "ri-close-circle-line") {
            document.querySelector(".gc-respo-nav").style.left = "100%";
        }
        else {
            document.querySelector(".gc-respo-nav").style.left = "0%";
        }

    }
    return (
        <>
            <nav className='gc-navbar'>
                <div className="gc-nav-layout">
                    <div className='gc-nav-left'>CarrerArc</div>
                    <div className='gc-nav-middle'>
                        <ul>
                            <li>
                                <Link to="/" >Home  </Link>
                            </li>
                            <li>
                                <Link to="/companies" >All Companies  </Link>
                            </li>
                            <li>
                                <Link to="/about-us" >About Us  </Link>
                            </li>
                            <li>
                                <Link to="/services" >Services  </Link>
                            </li>
                            <li>
                                <Link to="/contact" >Contact Us  </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='gc-nav-rght'>
                        <button id='gc-login'>
                            <Link to="/login">
                                Login
                            </Link>
                        </button>
                        <button id='gc-signup'>
                            <Link to="/signup">
                                Signup for free
                            </Link>
                        </button>
                        <i className="ri-menu-3-line" onClick={handleNav}></i>
                    </div>
                </div>
                <div className="gc-respo-nav">
                    <div className='gc-nav-middle'>
                        <ul>
                            <li>
                                <Link to="/" >Home  </Link>
                            </li>
                            <li>
                                <Link to="/companies" >All Companies  </Link>
                            </li>
                            <li>
                                <Link to="/about-us" >About Us  </Link>
                            </li>
                            <li>
                                <Link to="/services" >Services  </Link>
                            </li>
                            <li>
                                <Link to="/contact" >Contact Us  </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='gc-nav-rght'>
                        <button id='gc-login'>
                            <Link to="/login">
                                Login
                            </Link>
                        </button>
                        <button id='gc-signup'>
                            <Link to="/signup">
                                Signup for free
                            </Link>
                        </button>
                        <i className="ri-close-circle-line" onClick={handleNav}></i>
                    </div>
                </div>
            </nav>
        </>
    )
}
