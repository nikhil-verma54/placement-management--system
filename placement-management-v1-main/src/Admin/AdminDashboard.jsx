import React, { useEffect, useState } from 'react'
import { useAuth } from '../auth/auth';
import './AdminDashboard.css'
import { FaUsers } from "react-icons/fa6";
import { FaUsersGear } from "react-icons/fa6";
import { SiOnlyoffice } from "react-icons/si";
import { FaUsersRays } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


export default function AdminDashboard() {
    const [userData, setUserData] = useState([]);
    const [companyData, setCompanyData] = useState([]);
    const { authorizationToken } = useAuth();
    const navigate = useNavigate();

    const getAllUserData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/users", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            const data = await response.json();
            setUserData(data);
            // Check The Response message
            // console.log(data)
            if (data.message === "Access denied") {
                return navigate("/dashboard")
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getAllCompany = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/allCompany", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
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
                console.log(data.userData);
            }
            else {
                navigate('/dashboard')
            }
        } catch (error) {
            console.log(`Error in Fetching Data Authentication: ${error}`);
        }
    };

    useEffect(() => {
        userAuthentication();
        getAllUserData();
        getAllCompany()
    }, [])

    return (
        <>
            <section className='gc-admin-dashboard'>
                <div className='gc-admin-bodycontainer'>
                    <h1>Welcome to the Admin Dashboard!</h1>
                    <p>Here you can view and manage all user accounts.</p>
                    <div className='gc-admin-all-stats'>
                        <div className='gc-stats-box'>
                            <div>
                                <h4>Total Users</h4>
                                <p>
                                    {userData.length}
                                </p>
                            </div>
                            <div className='gc-stats-icon'>
                                <FaUsers />
                            </div>
                        </div>
                        <div className='gc-stats-box'>
                            <div>
                                <h4>Total Admins</h4>
                                <p>
                                    {userData.filter((val, index) => {
                                        return val.isAdmin == true
                                    }).length}
                                </p>
                            </div>
                            <div className='gc-stats-icon'>
                                <FaUsersGear />
                            </div>
                        </div>
                        <div className='gc-stats-box'>
                            <div>
                                <h4>Total Companies</h4>
                                <p>{companyData.length}</p>
                            </div>
                            <div className='gc-stats-icon'>
                                <SiOnlyoffice />
                            </div>
                        </div>
                        <div className='gc-stats-box'>
                            <div>
                                <h4>Placed Users</h4>
                                <p>12</p>
                            </div>
                            <div className='gc-stats-icon'>
                                <FaUsersRays />
                            </div>
                        </div>
                    </div>
                    <div className='gc-admin-tables'>
                        <div className='gc-table-division-1'>
                            <h4 className='mb-3'>Lists of Users</h4>
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Branch</th>
                                        <th>Year</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userData.map((val, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{val.username}</td>
                                                <td>{val.email}</td>
                                                <td>{val.phone}</td>
                                                <td>{val.branch}</td>
                                                <td>{val.year}</td>
                                                <td>
                                                    <button className='btn btn-sm btn-danger'>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className='gc-table-division-2'>
                            <h4 className='mb-3'>Lists of Companies</h4>
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th>Company Name</th>
                                        <th>Job Type</th>
                                        <th>Location</th>
                                        <th>Package</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {companyData.map((val, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{val.companyName}</td>
                                                <td>{val.jobType}</td>
                                                <td>{val.companyAddress}</td>
                                                <td>{val.package}</td>
                                                <td>{val.date}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
