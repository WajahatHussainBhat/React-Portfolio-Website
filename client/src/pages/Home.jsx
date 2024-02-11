import React from "react";
import "animate.css";
import myImage from "../images/myImage.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home-info animate__animated animate__fadeInLeft animate__slow">
        Hello!I 'm <br />{" "}
        <span className="home-info-name"> Wajahat Hussain </span> <br />
        Student of Computer Science{" "}
      </div>{" "}
      <div className="home-img animate__animated animate__fadeInRight animate__slow">
        <img id="myImage" src={myImage} alt="" />
      </div>{" "}
    </div>
  );
};

export default Home;
