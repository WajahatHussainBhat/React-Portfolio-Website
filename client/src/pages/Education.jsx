import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";
import e1 from "../images/nchs.png";
import e2 from "../images/school2.png";
import e3 from "../images/dpu.png";
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from "react";

const Education = () => {

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
    query: "(min-width:1000px)",
  });

  const educationData = [
    {
      img: e1,
      institute: "New Convent High School, Srinagar",
      date: "2017",
      cgpa: "9.80",
      degreeInfo:
        "I successfully completed my 10th grade at New Convent School, where I gained a strong foundation in education.",
    },
    {
      img: e2,
      institute: "Govt. Boys Higher Secondary School, Jawahar Nagar",
      date: "2019",
      cgpa: "72.8%",
      degreeInfo:
        "I successfully completed my 12th grade at GBHSS, Jawahar Nagar. This educational journey has equipped me with valuable knowledge and skills for my future endeavors.",
    },
    {
      img: e3,
      institute: "Dr. D Y Patil Institute of Technology, pimpri pune",
      date: "2020-present",
      cgpa: "8.4",
      degreeInfo:
        "Pursuing a Bachelor's degree in Computer Engineering at DIT, where I am actively gaining comprehensive knowledge and practical skills in the field.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div ref={ref} className="education" style={{ marginTop: !isNonMobileScreens && "2rem" }}>
      <div
        className="certification-title "
        style={{ fontSize: !isNonMobileScreens && "0.8rem" , width: !isNonMobileScreens && "9rem"}}
      >
        Education{" "}
      </div>{" "}
      <Slider
        {...settings}
        className={`${animated ? 'animate__animated animate__fadeInLeft animate__slow' : ""}`}
      >
        {" "}
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <img src={edu.img} alt="" />
            <div className="edu-institute"> {edu.institute} </div>{" "}
            <div className="edu-date"> {edu.date} </div>{" "}
            <div className="edu-cgpa"> CGPA / Percentage: {edu.cgpa} </div>{" "}
            <div className="degree-info"> {edu.degreeInfo} </div>{" "}
          </div>
        ))}{" "}
      </Slider>{" "}
    </div>
  );
};

export default Education;
