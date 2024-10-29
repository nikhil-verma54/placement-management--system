import React, { useState } from 'react'
import './Signup.css'
import userSchema from '../Schema/SignupUserSchema'
import { Link, useNavigate } from "react-router-dom";
import { URL } from '../Data/data';
import { toast } from 'react-toastify';
import { useAuth } from "../auth/auth";

// Importing Icons
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { CgCalendarDates } from "react-icons/cg";
import { BsDropbox } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import { SiLastpass } from "react-icons/si";
import { IoIosSchool } from "react-icons/io";
import { MdOutlineCodeOff } from "react-icons/md";


export default function Signup() {

  const navigate = useNavigate();
  const { saveTokenInLocalStr } = useAuth()

  const [formData, setFormData] = useState({
    username: '',
    year: '',
    email: '',
    semester: '',
    phone: '',
    password: '',
    college: '',
    branch: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Clear error message when input is updated
    if (name in formErrors) {
      setFormErrors((prevState) => ({
        ...prevState,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    Object.entries(userSchema).forEach(([field, rules]) => {
      if (rules.required && !formData[field]) {
        errors[field] = `${field} is required`;
      }
    });

    setFormErrors(errors);


    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    toast.dismiss();
    if (validateForm()) {
      // Submit the form data to the server or perform other actions
      // console.log('Form data:', formData);
      try {
        const response = await fetch(URL + "register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const responseData = await response.json();
        saveTokenInLocalStr(responseData.token);

        if (response.ok) {
          toast.success("Registration Successfull!");
          setFormData({
            username: '',
            year: '',
            email: '',
            semester: '',
            phone: '',
            password: '',
            college: '',
            branch: '',
          })
          window.setTimeout(() => {
            navigate("/dashboard");
          }, 1000);
          // return toast.success(response.msg);
        } else {
          // console.log(responseData);
          return toast.error(
            responseData.extraDetails
              ? responseData.extraDetails
              : responseData.message
          );
        }
        // console.log(data);
      } catch (error) {
        // toast.error("Error: ", error);
        toast.error("Server Error!");
      }
    }
    else {
      toast.warn("All fields are required")
    }
  };



  return (
    <>
      <div className="gc-signup gc-signup d-flex">
        <div className="gc-signup-lft d-flex flex-column align-items-start justify-content-center">
          <h1>Sign up</h1>
          <div className="gc-form-signup d-flex column-gap-5">
            <div className="row">
              <div className="col">
                <div className="mb-3 d-flex flex-column gap-2">
                  <label htmlFor="uname" className="form-label">Full Name</label>
                  <div className="gc-signup-input d-flex align-items-center gap-3">
                    <div className='gc-input-icons'>
                      <MdDriveFileRenameOutline />
                    </div>
                    <input
                      type="text"
                      id="uname"
                      name="username"
                      placeholder="Enter your name"
                      value={formData.username}
                      onChange={handleInputChange}
                      className={`form-control ${formErrors.username ? 'is-invalid' : ''}`}
                    />
                  </div>
                  {formErrors.username && <div className="invalid-feedback">{formErrors.username}</div>}
                </div>
              </div>
              <div className="col">
                <div className="mb-3 d-flex flex-column gap-2">
                  <label htmlFor="uyear" className="form-label">Year</label>
                  <div className="gc-signup-input d-flex align-items-center gap-3">
                    <div className='gc-input-icons'>
                      <CgCalendarDates />
                    </div>
                    <select
                      name="year"
                      id='uyear'
                      value={formData.year}
                      onChange={handleInputChange}
                      className={`form-control ${formErrors.year ? 'is-invalid' : ''}`}
                    >
                      <option value="">Enter Your Year</option>
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="mb-3 d-flex flex-column gap-2">
                  <label htmlFor="uemail" className="form-label">Email</label>
                  <div className="gc-signup-input d-flex align-items-center gap-3">
                    <div className='gc-input-icons'>
                      <MdEmail />
                    </div>
                    <input
                      type="email"
                      id="uemail"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                    />
                  </div>

                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="mb-3 d-flex flex-column gap-2">
                  <label htmlFor="usemester" className="form-label">Semester</label>
                  <div className="gc-signup-input d-flex align-items-center gap-3">
                    <div className='gc-input-icons'>
                      <BsDropbox />
                    </div>
                    <select
                      name="semester"
                      id='usemester'
                      value={formData.semester}
                      onChange={handleInputChange}
                      className={`form-control ${formErrors.semester ? 'is-invalid' : ''}`}
                    >

                      <option value="">Enter Your Semester</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                    </select>
                  </div>

                </div>
              </div>
              <div className="col">
                <div className="mb-3 d-flex flex-column gap-2">
                  <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                  <div className="gc-signup-input d-flex align-items-center gap-3">
                    <div className='gc-input-icons'>
                      <FaPhone />
                    </div>
                    <input
                      type="number"
                      id="phoneNumber"
                      name="phone"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`form-control ${formErrors.phone ? 'is-invalid' : ''}`}
                    />
                  </div>

                </div>
              </div>
              <div className="col">
                <div className="mb-3 d-flex flex-column gap-2">
                  <label htmlFor="upassword" className="form-label">Password</label>
                  <div className="gc-signup-input d-flex align-items-center gap-3">
                    <div className='gc-input-icons'>
                      <SiLastpass />
                    </div>
                    <input
                      type="password"
                      id="upassword"
                      name="password"
                      placeholder="***********"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`form-control ${formErrors.password ? 'is-invalid' : ''}`}
                    />
                  </div>

                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="mb-3 d-flex flex-column gap-2">
                  <label htmlFor="ucollege" className="form-label">College</label>
                  <div className="gc-signup-input d-flex align-items-center gap-3">
                    <div className='gc-input-icons'>
                      <IoIosSchool />
                    </div>
                    <input
                      type="text"
                      id="ucollege"
                      name="college"
                      placeholder="Enter your college name"
                      value={formData.college}
                      onChange={handleInputChange}
                      className={`form-control ${formErrors.college ? 'is-invalid' : ''}`}
                    />
                  </div>

                </div>
              </div>
              <div className="col">
                <div className="mb-3 d-flex flex-column gap-2">
                  <label htmlFor="ubranch" className="form-label">Branch</label>
                  <div className="gc-signup-input d-flex align-items-center gap-3">
                    <div className='gc-input-icons'>
                      <MdOutlineCodeOff />
                    </div>
                    <select
                      name="branch"
                      id='ubranch'
                      value={formData.branch}
                      onChange={handleInputChange}
                      className={`form-control ${formErrors.branch ? 'is-invalid' : ''}`}>
                      <option value="">Enter Your Branch</option>
                      <option value="CSE">CSE</option>
                      <option value="AI">AI</option>
                      <option value="CS/DS">CS/DS</option>
                      <option value="EX">EX</option>
                      <option value="EC">EC</option>
                      <option value="Civil">Civil</option>
                      <option value="ME">ME</option>
                    </select>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="gc-cta-signup d-flex align-items-center flex-column gap-3">
            <button className='gc-cta-btn' onClick={handleSubmit}>Sign Up</button>
            <p>Already have an account? <Link to="/login" className='text-primary'>Sign in</Link></p>
          </div>
        </div>
        <div className="gc-signup-rght d-flex justify-content-center">
          <img src="./signupPTS.svg" alt="mainlogin-gc" />
        </div>
      </div>
    </>
  )
}
