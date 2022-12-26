import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./About.scss";


const aboutFallback = [
  {
    _id: 123124213,
    title: "Loading",
    description: "Loading",
    imgUrl: images.about01,
  }
];

const About = () => {
  const [aboutData, setAboutData] = useState<any>(aboutFallback);

  useEffect(() => {
    fetch("https://portfolio-en-server.vercel.app/portfolio/en/about")
      .then((res) => res.json())
      .then((data) => setAboutData(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Design</span> <br />
        means <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {aboutData.map((about: any) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about._id}
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
