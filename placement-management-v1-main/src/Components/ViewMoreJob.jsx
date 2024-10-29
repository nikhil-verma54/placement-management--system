import React from 'react'
import './ViewMoreJob.css'
import { Link } from 'react-router-dom'

export default function ViewMoreJob() {
    return (
        <>
            <div className="gc-view-more">
                <div className="gc-view-more-header d-flex">
                    <div className="gc-view-more-header-back">
                        <h4><i class="ri-arrow-left-s-line"></i> Back to Upcoming Jobs</h4>
                    </div>
                    <div className="gc-view-more-header-company">
                        <h1>Gravity Coding Agency</h1>
                    </div>
                </div>
                <div className="gc-view-more-overview d-flex">
                    <div className="gcvm-lft d-flex flex-column gap-3">
                        <div className="gcvm-img d-flex align-items-center justify-content-center">
                            <img src="https://i.pinimg.com/originals/be/cb/ca/becbca09cc81c9ecd1ce133c836b3f25.gif" alt="" />
                        </div>
                        <p>Gravity Coding Agencey</p>
                        <h3>Full Stack Web Developer</h3>
                        <div className="gcvm-lft-skills d-flex gap-3">
                            <h4>JavaScript</h4>
                            <h4>UI/UX Design</h4>
                            <h4>Backend</h4>
                        </div>
                    </div>
                    <div className="gcvm-rght">
                        <div className="gcvm-overview-card">
                            <h1 className='mainHeading'>Overview</h1>
                            <table>
                                <tr>
                                    <th>Website</th>
                                    <td><Link to="/">Gravity Coding</Link></td>
                                </tr>
                                <tr>
                                    <th>Last Date</th>
                                    <td>12/05/2024</td>
                                </tr>
                                <tr>
                                    <th>Package</th>
                                    <td>15LPA - 18LPA</td>
                                </tr>
                                <tr>
                                    <th>Experience</th>
                                    <td>0 Years</td>
                                </tr>
                                <tr>
                                    <th>Job Type</th>
                                    <td>Remote</td>
                                </tr>
                                <tr>
                                    <th>No. of Opening</th>
                                    <td>10</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="gc-view-more-about">
                    <h3 className='mainHeading2'>About</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum minus fugiat ipsum rerum aut illum dignissimos velit quasi exercitationem voluptatem ea, itaque architecto mollitia quos nesciunt asperiores voluptatibus consectetur! Ipsam corporis cumque non error ullam doloribus, unde natus nisi. Quo sit ad, repudiandae mollitia nulla amet omnis architecto aspernatur aliquid! Animi tempore amet, a maxime vitae minima eveniet veritatis sequi cupiditate illo beatae magnam dignissimos veniam cum, consequuntur pariatur rem alias quos nesciunt blanditiis perspiciatis in facilis. Eligendi itaque ratione dolores porro cumque unde id atque sunt expedita ullam velit quos, totam est quisquam debitis sapiente modi consequuntur numquam neque laborum aliquam facere aspernatur cupiditate. Porro assumenda, deserunt mollitia, aliquam quae cum magnam, id sint delectus quam adipisci voluptatibus esse.</p>
                </div>
            </div>
        </>
    )
}
