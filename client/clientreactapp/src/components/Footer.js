import React from "react";
import "./Footer.css";
import PrivacyModal from "./PrivacyModal.js";


import { mergeClasses } from "@material-ui/styles";


const Footer = () => {
    
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="item1">
                    <PrivacyModal />
                </div>

                <div className="item2">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} YourCompany. All Rights
                        Reserved.
                    </span>
                </div>
                <a
                    href="https://github.com/sudiptob2/simple-react-footer"
                    target="_blank"
                    className="item3"
                >
                    {/* <img src={github2} width = "80px" height = "60px" /> */}
                </a>
               
                <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    className="item5"
                >
                    {/* <img src={twitter} width = "120px" height = "60px" /> */}
                </a>

                {false && <PrivacyModal click={true} />}
            </div>
        </footer>
    );
};

export default Footer;