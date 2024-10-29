import React from 'react'
import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <>
            <section className='gc-footer'>
                <div className="">
                    &copy; 2024 - PTSManage. All rights reserved <Link to="/privacy-policy"><u>Privacy Policy</u></Link>
                </div>
                <div className='gc-footer-social-media'>
                    <Link href="/">
                        <FaInstagram />
                    </Link>
                    <Link href="/">
                        <CiLinkedin />
                    </Link>
                    <Link href="/">
                        <FaGithub />
                    </Link>
                </div>
            </section>
        </>
    )
}
