import React, { useEffect, useState } from 'react'
import './AllCompanies.css'
// Importing icons

import { MdFoundation } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { IoMdShare } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { LuInfo } from "react-icons/lu";
import { useAuth } from '../auth/auth';
import { toast } from 'react-toastify';



export default function AllCompanies() {

    const [companyData, setCompanyData] = useState([]);
    const { authorizationToken } = useAuth();

    const getAllCompany = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/allCompanies", {
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

    useEffect(() => {
        getAllCompany()
    }, [])

    const deleteCompany = async (id) => {
        // console.log(id)
        try {
            const response = await fetch(`http://localhost:5000/api/admin/allCompanies/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            console.log(response);
            if (response.ok) {
                toast.success("User Deleted Successfully");
            }
            toast.error("Something Went Wrong ||");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
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
                                            <MdDelete onClick={() => { deleteCompany(val._id) }} />
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
                                    <div className='gc-card-button mt-4'>
                                        <button className='btn btn-success'>Show Applied Students</button>
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
