import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Testimonial.scss";




const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([
    {
      imgUrl: images.flutter,
      name: "Testimonial",
      company: "Company",
      feedback: images.about01,
    },
  ]);
  const [brands, setBrands] = useState([
    {
      _id: "01",
      imgUrl: images.react,
      name: "Nike",
    },
    {
      _id: "01",
      imgUrl: images.javascript,
      name: "Nike",
    },
  ]);


  const testimonialsData = [
    {
      imgUrl: images.flutter,
      name: "Testimonial",
      company: "Company",
      feedback: images.about01,
    },
  ];
  const brandsData = [
    {
      _id: "01",
      imgUrl: images.flutter,
      name: "Nike",
    },
  ];

  const handleClick = (index:any) => {
    setCurrentIndex(index);
  };

  /* useEffect(() => {
setTestimonials(testimonialsData);
        setBrands(brandsData);

  }, []); */

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img
              src={testimonials[currentIndex].imgUrl}
              alt={testimonials[currentIndex].name}
            />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
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
                  currentIndex === testimonials.length - 1
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

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Testimonial;
