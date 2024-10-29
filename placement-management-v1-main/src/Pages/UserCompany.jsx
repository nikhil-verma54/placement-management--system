import React, { useEffect, useState } from 'react'
import './Company.css'
import companiesData from '../Data/companies.json'
// Importing icons

import { FaIndustry } from "react-icons/fa";
import { MdFoundation } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { IoMdShare } from "react-icons/io";
import { LuInfo } from "react-icons/lu";
import { useAuth } from '../auth/auth';
import { VscThreeBars } from 'react-icons/vsc';
import UserNavbar from '../Components/UserNavbar';
import { toast } from 'react-toastify';


export default function UserCompany() {

    const [companyData, setCompanyData] = useState([]);
    const [check, setCheck] = useState(true);
    const [applyCompany, setApplyCompany] = useState([]);

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

    const handleApply = (id,) => {
        // console.log();
        // setApplyCompany(id);
        toast.dismiss()
        applyCompany.filter((val) => {
            console.log(val);
            if (val === "" || val === id) {
                // console.log(false);
                setCheck(false)
                return false
            }
        })
        // console.log(check);
        if (applyCompany.filter((val) => {
            return val === id
        })) {
            applyCompany.push(id)
            return toast("You Application has been Sumbitted")
        }
        else {
            return toast.warn("You are Alredy in")
        }
        // console.log(applyCompany);
    }

    useEffect(() => {
        getAllCompany()
    }, [])

    return (
        <>
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#userDashboard" aria-controls="userDashboard" id='user-sideNav-btn'>
                <VscThreeBars />
            </button>

            <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="userDashboard" aria-labelledby="userDashboardLabel">
                <UserNavbar />
            </div>

            <section className='gc-company'>
                <div className="gc-company-left">
                    <div className='gc-filter-section'>
                        <div>
                            {companyData.length} Companies matched
                        </div>
                        <button id='gc-clear-filter'>Clear filters</button>
                    </div>
                    <input type="search" placeholder='Search here' className='form-control' />
                    <div className='gc-filter-options'>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="check-webdevelopment" />
                            <label className="form-check-label" htmlFor="check-webdevelopment">
                                Web Development
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="check-androiddevelopment" />
                            <label className="form-check-label" htmlFor="check-androiddevelopment">
                                Android Development
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="check-database" />
                            <label className="form-check-label" htmlFor="check-database">
                                Database Management
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="check-cloud" />
                            <label className="form-check-label" htmlFor="check-cloud">
                                Cloud Management
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="check-aws" />
                            <label className="form-check-label" htmlFor="check-aws">
                                AWS Console
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="check-hosting" />
                            <label className="form-check-label" htmlFor="check-hosting">
                                Hosting
                            </label>
                        </div>
                    </div>
                    <button id='gc-apply-filter'>Apply</button>
                </div>
                <div className="gc-company-rght">
                    <div className="gc-company-rght-inner">
                        {companyData.map((val, index) => {
                            return (
                                <div className="gc-card" key={index}>
                                    <div className='gc-card-title'>
                                        <div className='fs-4'>
                                            {val.companyName}
                                        </div>
                                        <div className='fs-4 d-flex gap-4'>
                                            <IoMdShare />
                                            <LuInfo />
                                            { }
                                        </div>
                                    </div>
                                    <div className='gc-card-subtitle mt-3'>
                                        <div className='d-flex gap-2 justify-content-center align-items-center'>
                                            <MdFoundation /> {val.jobType}
                                        </div>
                                        <div className='d-flex gap-2 justify-content-center align-items-center'>
                                            <FaLocationDot /> {val.companyAddress}
                                        </div>
                                        <div className='d-flex gap-2 justify-content-center align-items-center'>
                                            <BsFillCalendarDateFill /> {val.date}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="gc-card-body">
                                        <p className='fs-5'>{val.companyDesc}</p>
                                        <div className=''>Experience : {val.experience}</div>
                                        <div className=''>Minimum Eligibility : {val.eligibility}</div>
                                        <div className=''>Package : {val.package}</div>
                                        <div className=''>No of Seats : {val.vacancy}</div>
                                    </div>
                                    <div className='gc-card-buttons mt-4'>
                                        <button className='btn' onClick={() => { handleApply(val._id) }}>Apply Now</button>
                                        <button className='btn gc-read-more'>Read More</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
