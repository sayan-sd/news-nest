import React from "react";
import logo from "../assets/logo.png";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import { FiMail } from "react-icons/fi";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-line"></div>

            <div className="footer-logo">
                <img src={logo} alt="NewsNest.AI" />

                <div className="footer-note">
                    <p>© NewsNest.Ai | All rights reserved.</p>
                </div>

                <div className="footer-icons">
                    <ul>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/sayan-sd/"
                                target="_blank"
                                style={{ all: "unset" }}>
                                <AiOutlineLinkedin />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/sayan-sd"
                                target="_blank"
                                style={{ all: "unset" }}>
                                <AiFillGithub />
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:sayan.sd@outlook.com"
                                target="_blank"
                                style={{ all: "unset" }}>
                                <FiMail />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
