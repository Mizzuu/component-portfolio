import React from "react";
import "./Header.scss";
import ProfileImg from "../img/mizuho_tohma_frontenddev.JPG";

const Header = () => {
    return (
        <div className="header">
            <div className="text item">
                <h1>Mizuho Tohma</h1>
                <h2>Front-end Developer</h2>
            </div>
            <div className="imgHolder item">
                <img src={ProfileImg} alt="profile" />
            </div>
        </div>
    );
};

export default Header;
