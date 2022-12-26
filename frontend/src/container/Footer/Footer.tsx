import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "react-toastify/dist/ReactToastify.css";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    if(!formData.name||!formData.email||!formData.message) return toast.error("Error, missing data!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    const contact = {
      where: "portfolio_english_client",
      name: formData.name,
      email: formData.email,
      message: formData.message,
    }
    setLoading(true);


       fetch("https://portfolio-en-server.vercel.app/portfolio/contact",
         {
           method: "POST",
           mode: "cors",
           cache: "no-cache",
           credentials: "same-origin",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(contact),
         }
       )
         .then(() => setIsFormSubmitted(true))
         .catch((err) => console.log(err));
  return  (
    setIsFormSubmitted(true)
    )
  };

  return (
    <>
      <h2 className="head-text">Chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:hello@micael.com" className="p-text">
            davi4alves@gmail.com
          </a>
        </div>
        {/* <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (123) 456-7890" className="p-text">
            +1 (123) 456-7890
          </a>
        </div> */}
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div className="app__submited">
          <h3 className="head-text">Thank you for getting in touch!</h3>
          <button
            type="button"
            className="p-text"
            onClick={() => {
              setIsFormSubmitted(false)
              setLoading(false)
            }}
          >
            Send another message
          </button>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);