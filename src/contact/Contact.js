import React from "react";
import "./Contact.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons/faSquareGithub";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";

const Contact = () => {
    return (
        <div className="footer">
            <div class="content-wrap">
                <h2>Let's Keep in Touch!</h2>

                <ul className="contact-list">
                    <li className="top email">
                        <a href="mailto:mizuho.tohma72@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} />
                            mizuho.tohma72@gmail.com
                        </a>
                    </li>
                    <li className="top phone">
                        <a href="tel:6044184955">
                            <FontAwesomeIcon icon={faPhone} />
                            (604)-418-4955
                        </a>
                    </li>
                    <li className="btm linkedin">
                        <a
                            href="https://www.linkedin.com/in/mizuhotohma/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon
                                className="icon"
                                icon={faLinkedin}
                            />
                        </a>
                    </li>
                    <li className="btm github">
                        <a
                            href="https://github.com/Mizzuu"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon
                                className="icon"
                                icon={faSquareGithub}
                            />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="copyright">
                <p>
                    <span className="otter">🦦 </span> Mizuho Tohma 2022
                    <span className="otter"> 🦦</span>
                </p>
            </div>
        </div>
    );
};

export default Contact;
