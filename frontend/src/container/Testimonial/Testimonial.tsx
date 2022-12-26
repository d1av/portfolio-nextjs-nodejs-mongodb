import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Testimonial.scss";

const testimonialsFallback = [
  {
    _id: 12345,
    imgUrl: images.react,
    name: "Loading",
    company: "Retrieving Data",
    feedback: images.react,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialsData, setTestimonialsData] = useState(testimonialsFallback);

  useEffect(() => {
    fetch("https://portfolio-en-server.vercel.app/portfolio/en/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonialsData(data));
  }, []);

  const handleClick = (index: any) => {
    setCurrentIndex(index);
  };


  return (
    <>
      {testimonialsData.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img
              src={testimonialsData[currentIndex].imgUrl}
              alt={testimonialsData[currentIndex].name}
            />
            <div className="app__testimonial-content">
              <p className="p-text">
                {testimonialsData[currentIndex].feedback}
              </p>
              <div>
                <h4 className="bold-text">
                  {testimonialsData[currentIndex].name}
                </h4>
                <h5 className="p-text">
                  {testimonialsData[currentIndex].company}
                </h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonialsData.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonialsData.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);
