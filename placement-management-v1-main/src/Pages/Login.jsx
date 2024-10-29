import React, { useState } from 'react'
import './Login.css'
import { URL } from '../Data/data';
import { useAuth } from '../auth/auth'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Login() {
    const [user, setUser] = useState({ email: '', password: '' });
    const [error, setError] = useState(null);
    const [loginSuccess, setLoginSuccess] = useState(false);

    const navigate = useNavigate();
    const { saveTokenInLocalStr } = useAuth();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        toast.dismiss()

        if (!user.email || !user.password) {
            return toast.error('All Fields are required');
        }

        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!emailRegex.test(user.email)) {
            toast.error('Invalid email format');
            return;
        }

        try {
            // toast.loading("Please wait...", { autoClose: 5000 });
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            const responseData = await response.json();

            if (response.ok) {
                // console.log("after login: ", responseData);
                toast.success("Login Successful");
                saveTokenInLocalStr(responseData.token);
                window.setTimeout(() => {
                    navigate("/dashboard");
                }, 1000);
            } else {
                toast.error(
                    responseData.extraDetails
                        ? responseData.extraDetails
                        : responseData.message
                );
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <>
            <div className="gc-login d-flex">
                <div className="gc-login-lft d-flex flex-column align-items-start justify-content-center">
                    <h1>Welcome back!</h1>
                    <p className='mainPLogin'>Start your placement journey faster & better</p>
                    <div className="gc-form-login d-flex flex-column gap-3">
                        <div className="mb-3 d-flex flex-column gap-2">
                            <label htmlFor="loginEmail" className="form-label">Email</label>
                            <div className="gc-login-email d-flex align-items-center gap-3">
                                <i class="ri-mail-line"></i>
                                <input
                                    type="email"
                                    id="loginEmail"
                                    placeholder="you@example.com"
                                    name="email"
                                    value={user.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="mb-3 d-flex flex-column gap-2">
                            <label htmlFor="loginPass" className="form-label">Password</label>
                            <div className="gc-login-password d-flex align-items-center gap-3">
                                <i class="ri-lock-2-line"></i>
                                <input
                                    type="password"
                                    id="loginPass"
                                    placeholder="At least 8 characters"
                                    name="password"
                                    value={user.password}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <Link className='d-flex align-self-end text-decoration-none' to="/forgot-password">Forgot password?</Link>
                        <div className="gc-cta-login d-flex align-items-center flex-column gap-3">
                            {!loginSuccess && <button className='gc-cta-btn' onClick={handleSubmit}>Sign in</button>}
                            {loginSuccess && <p className='text-success'>Login successful!</p>}
                            {error && <p className='text-danger'>{error}</p>}
                            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                        </div>
                    </div>
                </div>
                <div className="gc-login-rght d-flex justify-content-center">
                    {/* <h2>Welcome Back!!!</h2> */}
                    <img src="./loginPTS.svg" alt="" />
                </div>
            </div>
        </>
    )
}
