import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Skills.scss";

const skillsFallback = [
  {
    _id: 12777523,
    name: "typescript",
    bgColor: "fff000",
    icon: images.typescript,
  },
  {
    _id: 1277414127523,
    name: "Loading",
    bgColor: "fff000",
    icon: images.javascript,
  },
];

const experiencesFallback = [
  {
    _id: 15646542344,
    year: "2022",
    name: "Loading",
    bgColor: "fff000",
    icon: images.vue,
    desc: "Trying to retrieve data",
    company: "Trying to retrieve data",
  },
  {
    _id: 127745683234,
    year: "2022",
    name: "Loading.",
    bgColor: "fff000",
    desc: "Trying to retrieve data",
    company: "Trying to retrieve data",
  },
];

const Skills = () => {
  const [skillsData, setSkillsData] = useState(skillsFallback);
  const [experiencesData, setExperiencesData] = useState(experiencesFallback);

  useEffect(() => {
    fetch("https://portfolio-en-server.vercel.app/portfolio/en/skills")
      .then((res) => res.json())
      .then((data) => setSkillsData(data));
    fetch("https://portfolio-en-server.vercel.app/portfolio/en/experiences")
      .then((res) => res.json())
      .then((data) => setExperiencesData(data));
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skillsData.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill._id}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiencesData.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience._id}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                <>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                    data-for={experience.name}
                    key={experience.name}
                  >
                    <h4 className="bold-text">{experience.name}</h4>
                    <p className="p-text">{experience.company}</p>
                  </motion.div>
                  <ReactTooltip
                    id={experience.name}
                    effect="solid"
                    arrowColor="#fff"
                    className="skills-tooltip"
                    scrollHide={true}
                  >
                    {experience.desc}
                  </ReactTooltip>
                </>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
