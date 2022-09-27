import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./About.scss";

const aboutFallback = [
  {
    title: "Web Development",
    description: "I an a good web developer",
    imgUrl: images.about01,
  },
  {
    title: "Web Design",
    description: "I an a good web developer",
    imgUrl: images.about02,
  },
  { title: "UX-UI", description: "I an a good UX/UI", imgUrl: images.about03 },
  {
    title: "Backend",
    description: "I an a good backend Developer",
    imgUrl: images.about04,
  },
];

const About = () => {
  const [aboutData, setAboutData] = useState<any>([]);
  useEffect(() => {
    fetch("https://portfolio-en-server.vercel.app/portfolio/en/about")
      .then((res) => res.json())
      .then((data) => {
        if (!data) {
          const fallback = {
            title: "Web Design",
            description: "I an a good web developer",
            imgUrl: images.about02,
          };
          return setAboutData(fallback);
        }
        return setAboutData(data.about);
      });
  }, []);

  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Design</span> <br />
        means <span>Good Business</span>
      </h2>
      {console.log(aboutData)}
      <div className="app__profiles">
        {aboutData.map((about:any, index:any) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
