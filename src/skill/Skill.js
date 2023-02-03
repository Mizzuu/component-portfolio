import React from "react";
import "./Skill.scss";

const Skill = () => {
    const skillArr = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "React Native",
        "Node.js",
        "Next.js",
        "MongoDB",
        "Mongoose",
        "WordPress",
        "Postman",
        "Firebase",
        "GraphQL",
        "Git",
        "Figma",
    ];
    return (
        <div className="skill">
            <div class="content-wrap divider">
                <h2>Skill Set</h2>
                <ul>
                    {skillArr.map((skill, i) => (
                        <li key={i}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Skill;
