import React from "react";
import "./Wallet.css";
import Data from "./data";

import { Link } from "react-router-dom";

const Wallets = () => {
  return (
    <div className="container">
      {Data.map((wallet) => {
        return (
          <>
            <div key={wallet.id} className="container__inner">
              <div>
                <Link
                  style={{ textDecoration: "none", color: "#333333" }}
                  to="/phrasekey"
                >
                  {wallet.name}
                </Link>
              </div>
              <div>
                <div className="image__container">
                  <Link
                    style={{ textDecoration: "none", color: "#333333" }}
                    to="/phrasekey"
                  >
                    <img src={wallet.image} alt={wallet.name} />
                  </Link>

                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Wallets;
