import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from "react";

const Certifications = () => {

  const isNonMobileScreens = useMediaQuery({
    query: "(min-width:1000px)",
  });

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


  const certificationData = [
    {
      date: "21 oct 2021",
      title: "Learn C++ Programming - Beginner to Advance - Deep Dive in C++",
      platform: "Udemy",
      instructor: "Abdul Bari",
      certInfo: "Learned various Popular Data Structures and their Algorithms",
      link: "https://www.udemy.com/certificate/UC-a561cc6b-3c36-44b3-8fe2-74de1308cb14/",
    },
    {
      date: "13 feb 2022",
      title: "Mastering Data Structures And Algorithems Using C And C++",
      platform: "Udemy",
      instructor: "Abdul Bari",
      certInfo: "Learned various Popular Data Structures and their Algorithms",
      link: "https://www.udemy.com/certificate/UC-113ed214-a1cc-41b0-ba14-17699bebe35a/",
    },
    {
      date: "3 jun 2023",
      title: "The Complete 2023 Web Development Bootcamp",
      platform: "Udemy",
      instructor: "Dr. Angela Yu",
      certInfo: "Learned various Popular Data Structures and their Algorithms",
      link: "https://www.udemy.com/certificate/UC-67d8e969-78c9-4789-8b21-697dc61939e0/",
    },
    {
      date: "29 dec 2022",
      title: "iOS & Swift - The Complete iOS App Development Bootcamp ",
      platform: "Udemy",
      instructor: "Dr. Angela Yu",
      certInfo: "Learned various Popular Data Structures and their Algorithms",
      link: "https://www.udemy.com/certificate/UC-a561cc6b-3c36-44b3-8fe2-74de1308cb14/",
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
    <div ref={ref}  className="certifications">
      <div
        className="certification-title "
        style={{ fontSize: !isNonMobileScreens && "0.8rem" , width: !isNonMobileScreens && "9rem"}}
      >
        Certifications{" "}
      </div>{" "}
      <Slider
        {...settings}
        className={`${animated ? 'animate__animated animate__fadeInRight animate__slow' : " "}`}
      >
        {" "}
        {certificationData.map((cert, index) => (
          <div className="certification-card" key={index}>
            <div className="certi-date"> {cert.date} </div>{" "}
            <div className="certi-title"> {cert.title} </div>{" "}
            <div className="certi-platform"> Platform: {cert.platform} </div>{" "}
            <div className="certi-instructor">
              {" "}
              Instructor: {cert.instructor}{" "}
            </div>{" "}
            <div className="certi-info"> {cert.certInfo} </div>{" "}
            <a href={cert.link} className="certi-link">
              {" "}
              Certificate{" "}
            </a>{" "}
          </div>
        ))}{" "}
      </Slider>{" "}
    </div>
  );
};

export default Certifications;
