import React, { useEffect, useState } from 'react'
import './UserDashboard.css'
import UserNavbar from '../Components/UserNavbar';
import { useAuth } from '../auth/auth';
import { Outlet, useNavigate } from 'react-router-dom';
import { VscThreeBars } from "react-icons/vsc";
import UserGraphDashboard from '../Graphs/Line';
import Dashboard from './Dashboard';

export default function UserDashboard() {

    const [user, setUser] = useState({})
    const [companyData, setCompanyData] = useState({})
    const { isLoggedIn, authorizationToken } = useAuth();
    const navigate = useNavigate();

    const userAuthentication = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/user", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setUser(data.userData);
            }
        } catch (error) {
            console.log(`Error in Fetching Data Authentication: ${error}`);
        }
    };

    const getAllCompany = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/allCompany", {
                method: "GET",
            });
            const data = await response.json();
            setCompanyData(data.response);
            // Check The Response message
            // console.log(data.response)
            if (data.message === "Access denied") {
                // return navigate("/dashboard")
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        // console.log(isLoggedIn)
        if (!isLoggedIn) {
            return navigate("/login")
        }
        userAuthentication();
        getAllCompany();
    }, [isLoggedIn])


    return (
        <>
            <section>
                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#userDashboard" aria-controls="userDashboard" id='user-sideNav-btn'>
                    <VscThreeBars />
                </button>

                <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="userDashboard" aria-labelledby="userDashboardLabel">
                    <UserNavbar />
                </div>
                <Dashboard userData={user} companyData={companyData} />
            </section>
        </>
    )
}
