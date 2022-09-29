import React, { useEffect, useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

import "./Work.scss";

const workFallback = [
  {
    _id: 11,
    title: "Web Development",
    projectLink: "#",
    codeLink: "#",
    imgUrl: images.about01,
    description: "Worked Here long time ago.",
    name: "Davi",
    tags: ["Software Industrie 2", "3", "4"],
  },
  {
    _id: 21,
    title: "Fullstack",
    projectLink: "#",
    codeLink: "#",
    imgUrl: images.about02,
    description: "Worked Here long time ago.",
    name: "Davi",
    tags: ["Software Industrie 2", "3", "4"],
  },
  {
    _id: 31,
    title: "Frontend",
    projectLink: "#",
    codeLink: "#",
    imgUrl: images.about03,
    description: "Worked Here long time ago.",
    name: "Davi",
    tags: ["Software Industrie 2", "3", "4"],
  },
  {
    _id: 44,
    title: "Backend",
    projectLink: "#",
    codeLink: "#",
    imgUrl: images.about04,
    description: "Worked Here long time ago.",
    name: "Davi",
    tags: ["Software Industrie 2", "3", "4"],
  },
  {
    _id: 25,
    title: "UX/UI",
    projectLink: "#",
    codeLink: "#",
    imgUrl: images.redux,
    description: "Worked Here long time ago.",
    name: "Davi",
    tags: ["Software Industrie 2", "3", "4"],
  },
  {
    _id: 16,
    title: "Web Development",
    projectLink: "#",
    codeLink: "#",
    imgUrl: images.figma,
    description: "Worked Here long time ago.",
    name: "Davi",
    tags: ["Software Industrie 2", "3", "4"],
  },
];

const Work = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [workData, setWorkData] = useState(workFallback);

  useEffect(() => {
    fetch("https://portfolio-en-server.vercel.app/portfolio/en/work")
      .then((res) => res.json())
      .then((data) => {
        setWorkData(data)
      });
  }, []);

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {workData.map((work) => (
          <div className="app__work-item app__flex" key={work._id}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
