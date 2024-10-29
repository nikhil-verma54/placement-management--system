import React from 'react'
import './UserNavbar.css'

// importing Icons
import { RxDashboard } from "react-icons/rx";
import { LiaIndustrySolid } from "react-icons/lia";
import { CgFormatColor } from "react-icons/cg";
import { RiShieldUserLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function UserNavbar() {
    return (
        <>
            <div className="col-md-12 gc-dash-left">
                <div className="icon">
                    <div className="cross-menu-icon">
                        {/* <i className="ri-menu-line"></i>
                        <div className="close-icon"><i className="ri-close-line"></i></div> */}
                    </div>

                    <div className='text-center fs-3 my-4'>LOGO</div>
                </div>

                <div className='gc-user-nav'>
                    <div className='gc-user-nav-icons'>
                        <Link to="/dashboard">
                            <RxDashboard /> Dashboard
                        </Link>
                    </div>
                    <div className='gc-user-nav-icons'>
                        <Link to="/dashboard/company">
                            <LiaIndustrySolid /> All Companies
                        </Link>
                    </div>
                    <div className='gc-user-nav-icons'>
                        <Link to="/dashboard">
                            <CgFormatColor /> Applied Companies
                        </Link>
                    </div>
                    <div className='gc-user-nav-icons'>
                        <Link to="/dashboard/profile">
                            <RiShieldUserLine /> Profile
                        </Link>
                    </div>
                    <div className='gc-user-nav-icons'>
                        <Link to="/dashboard/setting">
                            <IoSettingsOutline /> Setting
                        </Link>
                    </div>
                    <div className='gc-user-nav-icons'>
                        <Link to="/logout">
                            <AiOutlineLogout /> Logout
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
