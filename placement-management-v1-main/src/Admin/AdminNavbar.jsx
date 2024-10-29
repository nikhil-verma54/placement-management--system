import React from 'react'
import './AdminNavbar.css'
import { Link } from 'react-router-dom'

export default function AdminNavbar() {
    return (
        <>
            <section className='gc-admin-nav'>
                <div className='gc-admin-logo'>
                    LOGO
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/admin">
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/company">
                                All Companies
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/add-company">
                                Add Companies
                            </Link>
                        </li>
                        <li>
                            <Link to="/logout">
                                Logout
                            </Link>
                        </li>
                    </ul>
                </nav>
            </section>
        </>
    )
}
