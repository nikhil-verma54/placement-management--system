import React from 'react'
import { VscThreeBars } from 'react-icons/vsc'
import UserNavbar from '../Components/UserNavbar'
import './UserSettings.css'

import { IoSettingsSharp } from "react-icons/io5";


export default function UserSettings() {
    return (
        <section>
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#userDashboard" aria-controls="userDashboard" id='user-sideNav-btn'>
                <VscThreeBars />
            </button>

            <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="userDashboard" aria-labelledby="userDashboardLabel">
                <UserNavbar />
            </div>
            <section className='gc-user-setting'>
                <h3 className='h3 text-decoration-underline mb-4'>USER SETTINGS</h3>
                <div className='gc-user-setting-box'>
                    <div className='gc-setting-box-outer'>
                        <div className="gc-icon-setting">
                            <IoSettingsSharp />
                        </div>
                        <div className='gc-setting-box-outer-items'>
                            <p>General</p>
                            <p className='gc-sett'>View and update your personal details</p>
                        </div>
                    </div>
                    <div className='gc-setting-box-outer'>
                        <div className="gc-icon-setting">
                            <IoSettingsSharp />
                        </div>
                        <div className='gc-setting-box-outer-items'>
                            <p>Account Setting</p>
                            <p className='gc-sett'>View and update your Account setting</p>
                        </div>
                    </div>
                    <div className='gc-setting-box-outer'>
                        <div className="gc-icon-setting">
                            <IoSettingsSharp />
                        </div>
                        <div className='gc-setting-box-outer-items'>
                            <p>Change Password</p>
                            <p className='gc-sett'>Update your password to secure your Account</p>
                        </div>
                    </div>
                    <div className='gc-setting-box-outer'>
                        <div className="gc-icon-setting">
                            <IoSettingsSharp />
                        </div>
                        <div className='gc-setting-box-outer-items'>
                            <p>Two-Step Verification</p>
                            <p className='gc-sett'>Set-up or Disable Two Step Verification</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
