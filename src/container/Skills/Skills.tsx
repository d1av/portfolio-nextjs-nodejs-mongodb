import {useState, useEffect} from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Skills.scss";

 const skillsFallback = [
   {
     _id: 123,
     name: "javascript",
     bgColor: "fff000",
     icon: images.figma,
   },
   {
     _id: 1232,
     name: "javascript",
     bgColor: "fff550",
     icon: images.figma,
   },
   {
     _id: 123221,
     name: "javascript",
     bgColor: "fff000",
     icon: images.figma,
   },
   {
     _id: 11123,
     name: "javascript",
     bgColor: "fff000",
     icon: images.figma,
   },
 ];

  const experiences = [
    {
      year: "2022",
      works: [
        {
          name: "javascript",
          bgColor: "fff000",
          icon: images.figma,
          desc: "desc",
          company: "company",
        },
      ],
    },
    {
      year: "2022",
      works: [
        {
          name: "javascript",
          bgColor: "fff000",
          icon: images.figma,
          desc: "desc",
          company: "company",
        },
      ],
    },
    {
      year: "2022",
      works: [
        {
          name: "javascript",
          bgColor: "fff000",
          icon: images.figma,
          desc: "desc",
          company: "company",
        },
      ],
    },
  ];

const Skills = () => {
  const [skillsData, setSkillsData] = useState(skillsFallback);

useEffect(() => {
  fetch("https://portfolio-en-server.vercel.app/portfolio/en/skills")
  .then(res=>res.json())
  .then(data=> setSkillsData(data))

}, [])


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
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
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
