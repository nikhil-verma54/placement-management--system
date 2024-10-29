import React, { useEffect, useState } from 'react'
import './Dashboard.css'


// Importing Icons
import { FaUsers } from "react-icons/fa6";
import { FaUsersGear } from "react-icons/fa6";
import { SiOnlyoffice } from "react-icons/si";
import { FaUsersRays } from "react-icons/fa6";
import { BsFillHandIndexThumbFill } from "react-icons/bs";
import { CChart } from '@coreui/react-chartjs';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function Dashboard(props) {

    const [user, setUser] = useState("2024")
    const navigate = useNavigate()

    const handleYear = (e) => {
        console.log(e.target);
        setUser(e.target.value);
    }

    const checkYear = () => {
        // console.log(user)
        if (user === "2024") {
            return (
                <>
                    <CChart
                        type="doughnut"
                        data={{
                            labels: ['Total Companies', 'Applied'],
                            datasets: [
                                {
                                    backgroundColor: ['#2476e0', '#1cbd24'],
                                    data: [`${props.companyData.length}`, 1],
                                },
                            ],
                        }}
                        options={{
                            plugins: {
                                legend: {
                                    labels: {
                                        color: "blue",
                                    }
                                }
                            },
                        }}
                    />
                </>
            )
        }
        else if (user === "2023") {
            return (
                <>
                    <CChart
                        type="doughnut"
                        data={{
                            labels: ['Total Companies', 'Applied'],
                            datasets: [
                                {
                                    backgroundColor: ['#2476e0', '#1cbd24'],
                                    data: [85, 0],
                                },
                            ],
                        }}
                        options={{
                            plugins: {
                                legend: {
                                    labels: {
                                        color: "blue",
                                    }
                                }
                            },
                        }}
                    />
                </>
            )
        }
        else {
            return (
                <>
                    <CChart
                        type="doughnut"
                        data={{
                            labels: ['Total Companies', 'Applied'],
                            datasets: [
                                {
                                    backgroundColor: ['#2476e0', '#1cbd24'],
                                    data: [76, 0],
                                },
                            ],
                        }}
                        options={{
                            plugins: {
                                legend: {
                                    labels: {
                                        color: "blue",
                                    }
                                }
                            },
                        }}
                    />
                </>
            )
        }
    }

    const handleApplication = () => {
        toast.success("Request has been submitted")
    }
    // console.log(props)
    return (
        <section className='gc-dashboard'>
            <div className='gc-dashboard-title'>
                <div>DASHBOARD</div>
                <div>Welcome, <span className='h5'>{props.userData.username}</span></div>
            </div>
            <div className='gc-admin-all-stats' role='button' onClick={() => {
                return navigate('company')
            }}>
                <div className='gc-stats-box'>
                    <div>
                        <h4>Total Companies</h4>
                        <p>
                            {props.companyData.length}
                        </p>
                    </div>
                    <div className='gc-stats-icon'>
                        <FaUsers />
                    </div>
                </div>
                <div className='gc-stats-box'>
                    <div>
                        <h4>Applied Companies</h4>
                        <p>
                            0
                        </p>
                    </div>
                    <div className='gc-stats-icon'>
                        <FaUsersGear />
                    </div>
                </div>
                {/* <div className='gc-stats-box'>
                    <div>
                        <h4>Total Companies</h4>
                        <p>{companyData.length}</p>
                    </div>
                    <div className='gc-stats-icon'>
                        <SiOnlyoffice />
                    </div>
                </div> */}
                {/* <div className='gc-stats-box'>
                    <div>
                        <h4>Placed Users</h4>
                        <p>12</p>
                    </div>
                    <div className='gc-stats-icon'>
                        <FaUsersRays />
                    </div>
                </div> */}
            </div>
            <div className='gc-dashboard-process'>
                <h3 className='text-decoration-underline'>Overview</h3>
                <div className='gc-user-dash-stats'>
                    <div className='circular-graph'>
                        <div className='gc-dashboard-select-date'>
                            <select
                                id=""
                                className='form-control'
                                onChange={handleYear}
                                name="year"
                                value={user}
                            >
                                <option value="2024">2024</option>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                            </select>
                        </div>
                        {checkYear()}
                    </div>
                    <div className="gc-user-applied-companies">
                        <div className="h3 text-decoration-underline">Applied Companies</div>
                        <div>
                            <table className='table' >
                                <thead>
                                    <tr>
                                        <th>S no.</th>
                                        <th>Company Name</th>
                                        <th>Status</th>
                                        <th>Details</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Gravity Coding</td>
                                        <td>
                                            Pending
                                        </td>
                                        <td>
                                            <Link to={"https://gravitycoding.com"} className='btn btn-sm btn-outline-primary'>View More</Link>
                                        </td>
                                        <td>
                                            <button className='btn btn-outline-danger btn-sm' onClick={handleApplication}>Withdrawn Application</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
