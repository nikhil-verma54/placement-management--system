import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <>
      <div className="gc-main d-flex">
        <div className="gc-lft-main d-flex align-items-start justify-content-center flex-column">
          <h1>It's time to turn your</h1>
          <div className="gc-content-pesudo d-flex align-items-center">
            <div className='conOne'>
              <p className="tagline">
                <span className="tagline-skill"><span className="tagline-skill_inner">dream</span></span>
                <span className="tagline-skill"><span className="tagline-skill_inner">hardwork</span></span>
                <span className="tagline-skill"><span class="tagline-skill_inner">target</span></span>
              </p>
            </div>
            <i class="ri-arrow-right-line"></i>
            <div className='conTwo'>
              <p className="tagline">
                <span className="tagline-skill"><span className="tagline-skill_inner">reality</span></span>
                <span className="tagline-skill"><span className="tagline-skill_inner">smartwork</span></span>
                <span className="tagline-skill"><span class="tagline-skill_inner">careerArc</span></span>
              </p>
            </div>
          </div>
          <p className='mainP'>A "Placement Management System" automates tasks and provides a central platform for all stakeholders.​</p>
          <div className="gc-cta-btn-home d-flex gap-3">
            <button>Upcoming Jobs <i class="ri-arrow-right-line"></i></button>
            <button>Login</button>
          </div>
        </div>
        <div className="gc-rght-main">

        </div>
      </div>
    </>
  )
}
