import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s1 from "../images/c.png";
import s2 from "../images/c++.png";
import s3 from "../images/html.png";
import s4 from "../images/css.png";
import s5 from "../images/bootstrap.png";
import s6 from "../images/js.png";
import s7 from "../images/reactjs.png";
import s8 from "../images/mongodb.png";
import s9 from "../images/express.png";
import s10 from "../images/nodejs.png";
import "animate.css";
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from "react";

const skillsData = [
  { image: s1, description: "C" },
  { image: s2, description: "C++" },
  { image: s3, description: "HTML" },
  { image: s4, description: "CSS" },
  { image: s5, description: "Bootstrap" },
  { image: s6, description: "JavaScript" },
  { image: s7, description: "ReactJS" },
  { image: s8, description: "MongoDB" },
  { image: s9, description: "Express" },
  { image: s10, description: "Node.js" },
];

const Skills = () => {
  const isNonMobileScreens = useMediaQuery({
    query: "(min-width:1000px)",
  });

  const [animated, setAnimated] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, 
  });

  useEffect(() => {
    if (inView) {
      setAnimated(true);
    }
  }, [inView]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div ref={ref} id="skills" className="skills "  style={{ margin: !isNonMobileScreens && "2rem 0"}}>
      <div
        className="about-title"
        style={{ fontSize: !isNonMobileScreens && "0.8rem", width: !isNonMobileScreens && "6rem"}}
      >
        Skills{" "}
      </div>{" "}
      <div className={`${animated ? 'skill-cards animate__animated animate__fadeInUp animate__slow' : ""}`}>
        <Slider {...settings}>
          {" "}
          {skillsData.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.image} alt={`skill${index}`} />{" "}
              <div
                className="description"
                style={{ fontSize: !isNonMobileScreens && "15px" }}
              >
                {" "}
                {skill.description}{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </Slider>{" "}
      </div>{" "}
    </div>
  );
};

export default Skills;
