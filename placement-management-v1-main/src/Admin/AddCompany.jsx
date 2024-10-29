import React, { useEffect, useState } from 'react'
import './AddCompany.css'
import companySchema from '../Schema/CompanySchema';
import { toast } from 'react-toastify';
import { ADMIN_URL } from '../Data/data';
import { useAuth } from '../auth/auth';
import { useNavigate } from 'react-router-dom';

export default function AddCompany() {

    const [company, setCompany] = useState({
        companyName: "",
        jobType: "",
        companyAddress: "",
        companyDesc: "",
        package: "",
        experience: "",
        vacancy: "",
        eligibility: "",
        websiteLink: "",
        date: ""
    })
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();
    const { authorizationToken } = useAuth();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCompany((prevState) => ({
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
        Object.entries(companySchema).forEach(([field, rules]) => {
            if (rules.required && !company[field]) {
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
            console.log('Form data:', company);
            try {
                const response = await fetch(ADMIN_URL + "company", {
                    method: "POST",
                    headers: {
                        "Authorization": authorizationToken,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(company),
                });
                const responseData = await response.json();

                if (response.ok) {
                    // console.log(response)
                    toast.success("Company Details added to our Database Successfully");
                    setCompany({
                        companyName: "",
                        jobType: "",
                        companyAddress: "",
                        companyDesc: "",
                        package: "",
                        experience: "",
                        vacancy: "",
                        eligibility: "",
                        websiteLink: "",
                        date: ""
                    })
                    window.setTimeout(() => {
                        navigate("/admin");
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
                console.log("Error: ", error);
            }
        }
        else {
            console.log("error");
        }
    };


    return (
        <>
            <section className='gc-add-company'>
                <h1>Add an Upcoming Company</h1>
                <div className='gc-add-company-form'>
                    <div className="row my-2">
                        <div className="col">
                            <label htmlFor="companyName">Company Name</label>
                            <input
                                type="text"
                                name='companyName'
                                value={company.companyName}
                                onChange={handleInputChange}
                                className={`form-control ${formErrors.companyName ? 'is-invalid' : ''}`}
                                placeholder="Company Name"
                                aria-label="companyName" />
                            {formErrors.companyName && <div className="invalid-feedback">{formErrors.companyName}</div>}
                        </div>
                        <div className="col">
                            <label htmlFor="jobType">Job Type</label>
                            <select
                                id='jobType'
                                name='jobType'
                                value={company.jobType}
                                onChange={handleInputChange}
                                className={`form-control ${formErrors.jobType ? 'is-invalid' : ''}`} >
                                <option value="" disabled>Select Job Type</option>
                                <option value="Remote">Remote</option>
                                <option value="Hybrid">Hybrid</option>
                            </select>
                            {formErrors.jobType && <div className="invalid-feedback">{formErrors.jobType}</div>}
                        </div>
                    </div>
                    <div className="col-12 my-2">
                        <label htmlFor="compnayAddress" className="form-label">Address</label>
                        <input
                            type="text"
                            name='companyAddress'
                            value={company.companyAddress}
                            onChange={handleInputChange}
                            className={`form-control ${formErrors.companyAddress ? 'is-invalid' : ''}`}
                            id="compnayAddress"
                            placeholder="1234 Main St"
                        />
                        {formErrors.companyAddress && <div className="invalid-feedback">{formErrors.companyAddress}</div>}
                    </div>
                    <div className="col-12 my-2">
                        <label htmlFor="aboutCompany" className="form-label">About Company</label>
                        <textarea
                            id="aboutCompany"
                            rows="3"
                            placeholder='About Company....'
                            name='companyDesc'
                            value={company.companyDesc}
                            onChange={handleInputChange}
                            className={`form-control ${formErrors.companyDesc ? 'is-invalid' : ''}`}
                        ></textarea>
                        {formErrors.companyDesc && <div className="invalid-feedback">{formErrors.companyDesc}</div>}
                    </div>
                    <div className="row my-2">
                        <div className="col">
                            <label htmlFor="package">Package</label>
                            <input
                                type="text"
                                name='package'
                                value={company.package}
                                onChange={handleInputChange}
                                className={`form-control ${formErrors.package ? 'is-invalid' : ''}`}
                                placeholder="Company Name"
                                aria-label="package"
                            />
                            {formErrors.package && <div className="invalid-feedback">{formErrors.package}</div>}
                        </div>
                        <div className="col">
                            <label htmlFor="experience">Experience</label>
                            <select
                                id='experience'
                                name='experience'
                                value={company.experience}
                                onChange={handleInputChange}
                                className={`form-control ${formErrors.experience ? 'is-invalid' : ''}`} >
                                <option value="" disabled>Select Experience</option>
                                <option value="fresher">Fresher</option>
                                <option value="Minimum 6-8 months">Minimum 6-8 months</option>
                                <option value="Minimum 1 Year">Minimum 1 Year</option>
                                <option value="Minimum 3 Year">Minimum 3 Year</option>
                                <option value="Minimum 5 Year">Minimum 5 Year</option>
                            </select>
                            {formErrors.experience && <div className="invalid-feedback">{formErrors.experience}</div>}
                        </div>
                        <div className="col">
                            <label htmlFor="noOfOpening">Total vacancy</label>
                            <input
                                type="text"
                                name='vacancy'
                                value={company.vacancy}
                                onChange={handleInputChange}
                                className={`form-control ${formErrors.vacancy ? 'is-invalid' : ''}`}
                                placeholder="No of Vacancy"
                                aria-label="noOfOpening"
                            />
                            {formErrors.vacancy && <div className="invalid-feedback">{formErrors.vacancy}</div>}
                        </div>
                    </div>
                    <div className="col-12 my-2">
                        <label htmlFor="eligilibity" className="form-label">Eligilibity</label>
                        <select
                            name='eligibility'
                            value={company.eligibility}
                            onChange={handleInputChange}
                            className={`form-control ${formErrors.eligibility ? 'is-invalid' : ''}`}
                            id="eligilibity"
                        >
                            <option value="" disabled>Select Eligilibity</option>
                            <option value="diploma">Diploma</option>
                            <option value="Bachelor in Computer Application (BCA)">Bachelor in Computer Application (BCA)</option>
                            <option value="B-Tech">B-Tech</option>
                            <option value="Bachelor of Computer Science (BCS)">Bachelor of Computer Science (BCS)</option>
                            <option value="Bachelor of Science in IT (BSc IT)">Bachelor of Science in IT (BSc IT)</option>
                            <option value="Other">MTech in Computer Science</option>
                            <option value="MTech in Computer Science">MTech in Computer Science</option>
                            <option value="Master in Computer Application (MCA)">Master in Computer Application (MCA)</option>
                            <option value="MSc IT">MSc IT</option>
                            <option value="other">Other</option>
                        </select>
                        {formErrors.eligibility && <div className="invalid-feedback">{formErrors.eligibility}</div>}
                    </div>
                    <div className="col-12 my-2">
                        <label htmlFor="webLink" className="form-label">Website Link</label>
                        <input
                            type="text"
                            name='websiteLink'
                            value={company.websiteLink}
                            onChange={handleInputChange}
                            className={`form-control ${formErrors.websiteLink ? 'is-invalid' : ''}`}
                            id="webLink"
                            placeholder="webLink"
                        />
                        {formErrors.websiteLink && <div className="invalid-feedback">{formErrors.websiteLink}</div>}
                    </div>
                    <div className="col-12 my-2">
                        <label htmlFor="date" className="form-label">Date</label>
                        <input
                            type="date"
                            name='date'
                            value={company.date}
                            onChange={handleInputChange}
                            className={`form-control ${formErrors.date ? 'is-invalid' : ''}`}
                            id="date"
                            placeholder="date"
                        />
                        {formErrors.date && <div className="invalid-feedback">{formErrors.date}</div>}
                    </div>
                    <button className='btn mt-4' style={{background:"#3176ff",color:"#fff"}} onClick={handleSubmit}>Add Company</button>
                </div>
            </section>
        </>
    )
}
