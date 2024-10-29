import React from 'react'
import './ForgotPass.css'
import { Link } from 'react-router-dom'

export default function ForgotPass() {
    return (
        <>
            <div className="container">
                <div className="row" style={{ height: "60vh" }}>
                    <div className="border m-4 border-2 rounded-2 col-md-6 mx-auto d-flex flex-column justify-content-center align-items-center" >
                        <h3>Forgot Password</h3>
                        <div className='w-100 p-5'>
                            <label htmlFor="forgot" className='py-4'>Enter Your Email</label>
                            <input type="text" className='form-control' placeholder='Enter Your Email...' />
                        </div>
                        <div className='px-5 w-100'>
                            <button className='btn btn-primary form-control'>Send Otp</button>
                        </div>
                        <div className='px-5 py-2 w-100 text-center'>
                            Back to <Link to="/login">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
