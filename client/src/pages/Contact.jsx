import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useInView } from 'react-intersection-observer';

import DownloadIcon from "../images/download-icon.png";
import { sendMessage } from "../api/index.js";
import Resume_pdf from "../files/RESUME.pdf"
import SocialIcons from "./SocialIcons.jsx";

const Contact = () => {
  const [animated, setAnimated] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0, 
  });

  useEffect(() => {
    if (inView) {
      setAnimated(true);
    }
  }, [inView]);

  const isNonMobileScreens = useMediaQuery({
    query: "(min-width:1407px)",
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendMessage(name, email, message);
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Error sending message. Please try again later.");
    }
  };

  return (
    <div ref={ref} id="contact" className="contact" style={{flexDirection: !isNonMobileScreens && "column", marginTop: !isNonMobileScreens && "4rem" }}>
      <div className="contact-container" style={{ width: !isNonMobileScreens && "100%" }}>
        <div
          className={`${animated ?' contact-title animate__animated  animate__fadeInLeft animate__slow' : ""}`}
          style={{ fontSize: !isNonMobileScreens && "0.8rem" , width: !isNonMobileScreens && "9rem"}}
        >
          Contact{" "}
        </div>{" "}
        <p className={`${animated ?' contact-title2 animate__animated  animate__fadeInRight animate__slow' : ""}`}>
          want to get in touch? Contact me on any of the platforms
        </p>
        <h1 className={`${animated ?'contact-title3  animate__animated animate__fadeInBottomLeft animate__slow' : ""}`}>
          Write me a message
        </h1>
        <form className="contact-form" onSubmit={handleSubmit} >
          <input
            className="contact-form-input"
            type="text"
            placeholder="Name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ fontSize: !isNonMobileScreens && "0.6rem" }}
          />
          <input
            className="contact-form-input"
            type="email"
            placeholder="Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ fontSize: !isNonMobileScreens && "0.6rem" }}
          />
          <input
            className="contact-form-input"
            type="text"
            placeholder="Message*"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            style={{ fontSize: !isNonMobileScreens && "0.6rem" }}
          />
          <button className="contact-form-btn" type="submit">
            Send
          </button>
        </form>
        <SocialIcons/>
      </div>
      <ToastContainer />

      <div className="resume-container" style={{ width: !isNonMobileScreens && "100%" , margin: "2.5rem 0"}}>
      <a className="resume" href={Resume_pdf} target="_blank" rel="noopener noreferrer" title="Wajahat_Hussain">
            <img
              className="download-icon"
              src={DownloadIcon}
              alt="download-icon"
            />
            Download Resume
        </a>
      </div>
      
    </div>
  );
};

export default Contact;
