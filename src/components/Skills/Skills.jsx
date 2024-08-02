import React, { useEffect, useState } from "react";
import "./Skills.css";

const technicalSkills = [
  { name: "HTML", level: 95, icon: "/assets/skills/html.png" },
  { name: "CSS", level: 90, icon: "/assets/skills/css.png" },
  { name: "JS", level: 85, icon: "/assets/skills/JavaScript.png" },
  { name: "React.js", level: 80, icon: "/assets/skills/react.png" },
  { name: "Node.js", level: 80, icon: "/assets/skills/node.png" },
  { name: "Bootstrap", level: 80, icon: "/assets/skills/bootstrap.png" },
  { name: "Firebase", level: 75, icon: "/assets/skills/firebase.png" },
  { name: "Figma", level: 75, icon: "/assets/skills/figma.png" },
];

const Skills = () => {
  const [skillLevels, setSkillLevels] = useState(technicalSkills.map(() => 0));

  useEffect(() => {
    setTimeout(() => {
      setSkillLevels(technicalSkills.map((skill) => skill.level));
    }, 500);
  }, []);

  return (
    <div className="skills" id="skills">
      <h1>Technical Skills</h1>
      <div className="skills-section">
        <div className="skills-group">
          {technicalSkills.map((skill, index) => (
            <div key={skill.name} className="skill">
              <div className="skill-icon">
                <img src={skill.icon} alt={`${skill.name} icon`} />
              </div>
              <div className="skill-name">
                <span>{skill.name}</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${skillLevels[index]}%` }}
                ></div>
              </div>
              <span className="skill-level">{skillLevels[index]}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
