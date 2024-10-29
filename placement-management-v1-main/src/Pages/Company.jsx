import React, { useEffect, useState } from 'react'
import './Company.css'
import companiesData from '../Data/companies.json'
// Importing icons

import { FaIndustry } from "react-icons/fa";
import { MdFoundation } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { IoMdShare } from "react-icons/io";
import { LuInfo } from "react-icons/lu";
import { useAuth } from '../auth/auth';


export default function Company() {

    const [companyData, setCompanyData] = useState([]);
    const navigate = useNavigate()

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
        getAllCompany()
    }, [])

    return (
        <>
            <section className='gc-company'>
                <form className="gc-company-left">
                    <div className='gc-filter-section'>
                        <div>
                            {companyData.length} Companies matched
                        </div>
                        <input type='reset' id='gc-clear-filter'>Clear filters</input>
                    </div>
                    <input type="search" placeholder='Search here' className='form-control' />
                    <div className='gc-filter-options'>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Web Development" id="check-webdevelopment" />
                            <label className="form-check-label" htmlFor="check-webdevelopment">
                                Web Development
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Android Development" id="check-androiddevelopment" />
                            <label className="form-check-label" htmlFor="check-androiddevelopment">
                                Android Development
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Database Management" id="check-database" />
                            <label className="form-check-label" htmlFor="check-database">
                                Database Management
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Cloud Management" id="check-cloud" />
                            <label className="form-check-label" htmlFor="check-cloud">
                                Cloud Management
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="AWS Console" id="check-aws" />
                            <label className="form-check-label" htmlFor="check-aws">
                                AWS Console
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Hosting" id="check-hosting" />
                            <label className="form-check-label" htmlFor="check-hosting">
                                Hosting
                            </label>
                        </div>
                    </div>
                    <button id='gc-apply-filter' >Apply</button>
                </form>
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
                                            <Link className='text-dark ' to={val.websiteLink}><LuInfo /></Link>
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
                                        <button className='btn' onClick={() => {
                                            navigate('/login')
                                        }}>Apply Now</button>
                                        <button className='btn gc-read-more' onClick={() => {
                                            navigate('/view-more-job')
                                        }}>Read More</button>
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
