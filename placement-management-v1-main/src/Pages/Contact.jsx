import React from 'react'
import './Contact.css'

export default function Contact() {
    return (
        <>
            <div className="contact-frm">
                <div className="lft-cont">
                    <div className="main-cont">
                        <h1>Contact Us</h1>
                        <p>We'd love to talk about how we can work together.</p>
                        <div className="cont-det">
                            <div className="email">
                                <div className="cir">
                                    <i class="ri-mail-line"></i>
                                </div>
                                <div className="mail-txt"><p>contact@gmail.com</p></div>
                            </div>

                            <div className="call">
                                <div className="cir">
                                    <i class="ri-phone-line"></i>
                                </div>
                                <p>+91 7004433815</p>
                            </div>

                        </div>

                        <div className="line"></div>

                        <p>"W&B is a key piece of our fast-paced,cutting-edge,large-scale <span style={{ color: "#F7F701" }}>research workflow:great flexibility, performence, and user experience."</span></p>

                        <div className="profile">
                            <div className="pic">
                                <div className="cir"></div>
                                <div className="txt">
                                    <p>Teams-Oreos</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="rght-cont">
                    <form class="row g-3">
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Email</label>
                            <input type="email" class="form-control" id="inputEmail4" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Password</label>
                            <input type="password" class="form-control" id="inputPassword4" />
                        </div>
                        <div class="col-12">
                            <label for="inputAddress" class="form-label">Address</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div class="col-12">
                            <label for="inputAddress2" class="form-label">Address 2</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">City</label>
                            <input type="text" class="form-control" id="inputCity" />
                        </div>
                        <div class="col-md-4">
                            <label for="inputState" class="form-label">State</label>
                            <select id="inputState" class="form-select">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <label for="inputZip" class="form-label">Zip</label>
                            <input type="text" class="form-control" id="inputZip" />
                        </div>
                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck" />
                                <label class="form-check-label" for="gridCheck">
                                    Check me out
                                </label>
                            </div>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}   
