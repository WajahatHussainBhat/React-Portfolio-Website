import React from "react";
import fbImage from "../images/facebook.png";
import instaImage from "../images/instagram.png";
import gitImage from "../images/github.png";
import linkedInImage from "../images/linkedin.png";
import youtubeImage from "../images/youtube.png";
import "animate.css";
import { useMediaQuery } from "react-responsive";

const SocialIcons = () => {
  const isNonMobileScreens = useMediaQuery({
    query: "(min-width:1000px)",
  });
  return (
    <div className="socialIcons animate__animated animate__slideInRight animate__slow">
      <a href="https://www.facebook.com/Wajahat.hussain.bhat">
        {" "}
        <img
          className="social-icon"
          src={fbImage}
          alt="fb"
          style={{
            width: !isNonMobileScreens && "2rem",
            margin: "1rem 0.5rem",
          }}
        />{" "}
      </a>{" "}
      <a href="https://www.instagram.com/wajahat_vlogs19/">
        {" "}
        <img
          className="social-icon"
          src={instaImage}
          alt="instagram"
          style={{
            width: !isNonMobileScreens && "2rem",
            margin: "1rem 0.5rem",
          }}
        />{" "}
      </a>{" "}
      <a href="https://github.com/WajahatHussainBhat">
        {" "}
        <img
          className="social-icon"
          src={gitImage}
          alt="github"
          style={{
            width: !isNonMobileScreens && "2rem",
            margin: "1rem 0.5rem",
          }}
        />
        {""}
      </a>{" "}
      <a href="https://www.linkedin.com/in/wajahat-hussain19/">
        {" "}
        <img
          className="social-icon"
          src={linkedInImage}
          alt="linkedIn"
          style={{
            width: !isNonMobileScreens && "2rem",
            margin: "1rem 0.5rem",
          }}
        />{" "}
      </a>{" "}
      <a href="https://www.youtube.com/@WajahatHussainBhat">
        {" "}
        <img
          className="social-icon"
          src={youtubeImage}
          alt="youtube"
          style={{
            width: !isNonMobileScreens && "2rem",
            margin: "1rem 0.5rem",
          }}
        />{" "}
      </a>{" "}
    </div>
  );
};

export default SocialIcons;
