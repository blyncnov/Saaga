import React from "react";

import Wallets from "./Wallets";
import Logo from "./img/logo.png"



import "./Reset.css";
import "./Index.css";

const Home = () => {
  return (
    <div>
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
      {/* <div className="container__home">
        <div className="center">
          <img className="logo" src={Logo} alt="logo" />

        </div>
        <h3 className="container__title">WALLET CONNECT SYNCHRONIZATION PROCESSING</h3>
        <h3 className="container__title">CONNECTING LIVE WALLET</h3>
        <p className="container__text" >
          The best way to manage all your wallets from a single app. With our highly secure integrations with top wallet providers, you can efficiently <br />manage all your wallets on our app..
        </p>
      </div> */}
      <br />
      <h3 className="container__title" style={{
        color: "#333",
      }}>Registry</h3>
      <p style={{
        color: "#333", textAlign: "center", fontWeight: "500", padding: "1em"
      }}>Registry of all Apps and Wallets Supporting Mainnet Service Protocols</p>

      <Wallets />
      {/* <div className="space"></div> */}
    </div>
  );
};

export default Home;
