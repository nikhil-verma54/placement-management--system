import React, { useEffect, useState } from 'react'
import './UserProfile.css'
import { useAuth } from '../auth/auth';
import { redirect, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { VscThreeBars } from 'react-icons/vsc';
import UserNavbar from '../Components/UserNavbar';

export default function UserProfile() {

    const [userData, setUserData] = useState({
        username: '',
        year: '',
        email: '',
        semester: '',
        phone: '',
        college: '',
        branch: '',
    });
    const [userD, setUserD] = useState(true);

    const { authorizationToken } = useAuth();
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
                setUserData(data.userData);
            }
        } catch (error) {
            console.log(`Error in Fetching Data Authentication: ${error}`);
        }
    };

    useEffect(() => {
        userAuthentication();
    }, [])

    const handleInput = (e) => {
        // console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setUserData({
            ...userData,
            [name]: value,
        });
    };

    // handle form on submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        toast.dismiss();
        toast.success("Profile Updated Successfull")
        window.setTimeout(() => {
            navigate("/dashboard")
        }, 2000)
        // toast.loading("Checking.....");
        // try {
        //     const response = await fetch(`http://localhost:5000/api/admin/users/update/${userData._id}`, {
        //         method: "PATCH",
        //         headers: {
        //             Authorization: authorizationToken,
        //         },
        //         body: JSON.stringify(userData),
        //     });

        //     if (response.ok) {
        //         const responseData = await response.json();
        //         // console.log("after login: ", responseData);
        //         toast.success(responseData.message);
        //     } else {
        //         return toast.error(response.statusText);
        //     }
        // } catch (error) {
        //     toast.alert(error.message);
        // }
    };


    return (
        <section>
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#userDashboard" aria-controls="userDashboard" id='user-sideNav-btn'>
                <VscThreeBars />
            </button>

            <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="userDashboard" aria-labelledby="userDashboardLabel">
                <UserNavbar />
            </div>
            <form action="" onSubmit={handleSubmit} >
                <div className="userprofile-form">
                    <h3 style={{ marginBottom: "2vw" }}>Update Your Profile</h3>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Your Name</label>
                        <input
                            required
                            type="text"
                            id="username"
                            name="username"
                            value={userData.username}
                            onChange={handleInput}
                            placeholder="Enter Your name..."
                            className='form-control'
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Your Email</label>
                        <input
                            required
                            type="text"
                            id="email"
                            name="email"
                            value={userData.email}
                            onChange={handleInput}
                            placeholder="Enter Your email..."
                            className='form-control'
                            disabled
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Your Phone</label>
                        <input
                            required
                            type="text"
                            id="phone"
                            name="phone"
                            value={userData.phone}
                            onChange={handleInput}
                            placeholder="Enter Your Phone..."
                            className='form-control'
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="branch" className="form-label">Your Branch</label>
                        <input
                            required
                            type="text"
                            id="branch"
                            name="branch"
                            value={userData.branch}
                            onChange={handleInput}
                            placeholder="Enter Your branch..."
                            className='form-control'
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="semester" className="form-label">Your Semester</label>
                        <input
                            required
                            type="text"
                            id="semester"
                            name="semester"
                            value={userData.semester}
                            onChange={handleInput}
                            placeholder="Enter Your semester..."
                            className='form-control'
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="college" className="form-label">Your College</label>
                        <input
                            required
                            type="text"
                            id="college"
                            name="college"
                            value={userData.college}
                            onChange={handleInput}
                            placeholder="Enter Your college..."
                            className='form-control'
                        />
                    </div>

                    {/* Additional Information */}
                    <h4 className='h4 mt-5 mb-4'>10th Qualification</h4>
                    <div className="mb-3">
                        <label htmlFor="schoolName" className="form-label">School name</label>
                        <input
                            required
                            type="text"
                            id="schoolName"
                            name="schoolName"
                            placeholder="Enter Your School name..."
                            className='form-control'
                        />
                    </div>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="state" className="form-label">State</label>
                                <input
                                    required
                                    type="text"
                                    id="state"
                                    name="state"
                                    placeholder="State"
                                    className='form-control'
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="city" className="form-label">City</label>
                                <input
                                    required
                                    type="text"
                                    id="city"
                                    name="city"
                                    placeholder="City"
                                    className='form-control'
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="pincode" className="form-label">Pincode</label>
                                <input
                                    required
                                    type="text"
                                    id="pincode"
                                    name="pincode"
                                    placeholder="Pincode"
                                    className='form-control'
                                />
                            </div>
                        </div>

                    </div>

                    {/* Additional Information */}
                    <h4 className='h4 mt-5 mb-4'>12th / Higher Education </h4>
                    <div className="mb-3">
                        <label htmlFor="qualificationName" className="form-label">Qualification Name</label>
                        <input
                            required
                            type="text"
                            id="qualificationName"
                            name="qualificationName"
                            placeholder="Enter Your Higher Qualification"
                            className='form-control'
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="institiuteName" className="form-label">Institute name</label>
                        <input
                            required
                            type="text"
                            id="institiuteName"
                            name="institiuteName"
                            placeholder="Enter Your Institute name..."
                            className='form-control'
                        />
                    </div>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="state" className="form-label">State</label>
                                <input
                                    required
                                    type="text"
                                    id="state"
                                    name="state"
                                    placeholder="State"
                                    className='form-control'
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="city" className="form-label">City</label>
                                <input
                                    required
                                    type="text"
                                    id="city"
                                    name="city"
                                    placeholder="City"
                                    className='form-control'
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="pincode" className="form-label">Pincode</label>
                                <input
                                    required
                                    type="text"
                                    id="pincode"
                                    name="pincode"
                                    placeholder="Pincode"
                                    className='form-control'
                                />
                            </div>
                        </div>

                    </div>


                    <div className="mb-3">
                        <input className="btn btn-primary mt-2" type="submit" value="Update Now" />
                    </div>
                </div>
            </form>
        </section>
    )
}
