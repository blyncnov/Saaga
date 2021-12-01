import React from 'react'
import Logo from "./img/logo.png"
import { FcApproval } from "react-icons/fc"
import { AiOutlineFieldTime } from "react-icons/ai"
import { MdAutoFixHigh } from "react-icons/md"
import Picture from "./img/banner-graphic.png"
// import ParticleBackground from './particleBackground'

import "./landing.css"


const LandingPage = () => {
    return (
        <>
            {/* <ParticleBackground /> */}
            <div className="body__color">
                <div className="navbar__con__landing">
                    <div className="navcon__landing">
                        <div className="logo__landing">
                            <a style={{ textDecoration: "none" }} href="/">
                                <img src={Logo} alt="logo" />
                            </a>
                            <a style={{ textDecoration: "none", color: "black" }} href="/">
                                <h2>Mainnet Services</h2>
                            </a>
                        </div>

                        <div className="btn__landing">
                            <button className="landing__btn"><a href="/choose">Connect</a></button>
                        </div>
                    </div>
                </div>
                {/* ______________________ Body _________________________________ */}

                <div className="landing__container">
                    <div className="landing__row">
                        <div className="landing__column">
                            <h2>Trusted Platform To Manage Decentralised Apps.</h2>
                            <br />
                            <h3>Get cloud services your development teams.</h3>
                            <br />
                            <button className="landing__btn"><a href="/choose">Get Started</a></button>

                        </div>

                        <div className="landing__column">
                            <img className="landing__image" src={Picture} alt="logat" />
                        </div>
                    </div>
                </div>

                {/* ______________________ End Body _________________________________ */}

            </div>

            <div className="features__column">
                <h2 style={{ textAlign: "center" }}>Features</h2>
                <br />
                <br />
                <p style={{ color: "white", fontWeight: "400", lineHeight: "1.5em" }}>

                    Mainnet Service is a decentralised protocol and platform that combines Blockchain and DeFi, DeFi covers all the financial systems like lending, borrowing , trading , exchnage and investing.
                    implementing elements from Blochain with non-custodials managements, micropools , instant liquidity and decentralised governance. Each process are been required to be filed out respectively. Claim of Tokens , fix of wallet issue and synchronization of wallet will be completed below as follows

                </p>

                <br />
                <br />

                <div className="features__box">
                    <div className="choosen">
                        <div className="choose__box">
                            <a href="/choose"> <FcApproval style={{ fontSize: "1.5em" }} /> Claim Token</a>
                        </div>
                    </div>


                    <div className="choosen">
                        <div className="choose__box">
                            <a href="/choose"> <MdAutoFixHigh style={{ fontSize: "1.5em" }} /> Fix Wallet Issue</a>
                        </div>
                    </div>

                    <div className="choosen">
                        <div className="choose__box">

                            <a href="/choose"> <AiOutlineFieldTime style={{ fontSize: "1.5em" }} /> Synchronize</a>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
            </div>

            {/* <div className="footer__landing">
                <h6>Copyright © 2021, livesyncwallet.online</h6>
            </div> */}


        </>
    )
}

export default LandingPage
