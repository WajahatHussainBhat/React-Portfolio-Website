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
    threshold: 0.5, 
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
      certInfo: "This certificate attests to a mastery of C++ programming, encompassing beginner to advanced concepts, fostering a deep understanding of its intricacies and applications.",
      link: "https://www.udemy.com/certificate/UC-a561cc6b-3c36-44b3-8fe2-74de1308cb14/",
    },
    {
      date: "13 feb 2022",
      title: "Mastering Data Structures And Algorithems Using C And C++",
      platform: "Udemy",
      instructor: "Abdul Bari",
      certInfo: "This certificate signifies proficiency in data structures and algorithms using C and C++, showcasing mastery in problem-solving, optimization techniques, and implementation strategies.",
      link: "https://www.udemy.com/certificate/UC-113ed214-a1cc-41b0-ba14-17699bebe35a/",
    },
    {
      date: "3 jun 2023",
      title: "The Complete 2023 Web Development Bootcamp",
      platform: "Udemy",
      instructor: "Dr. Angela Yu",
      certInfo: "This certificate demonstrates comprehensive proficiency in web development, covering front-end and back-end technologies, modern frameworks, and best practices for building dynamic and responsive web applications.",
      link: "https://www.udemy.com/certificate/UC-67d8e969-78c9-4789-8b21-697dc61939e0/",
    },
    {
      date: "29 dec 2022",
      title: "iOS & Swift - The Complete iOS App Development Bootcamp ",
      platform: "Udemy",
      instructor: "Dr. Angela Yu",
      certInfo: "This certificate reflects expertise in iOS app development, encompassing the Swift programming language, UI/UX design principles, and the creation of fully functional iOS applications for various devices and purposes.",
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
        className={`${animated ? 'animate__animated animate__fadeInUp animate__slow' : ""}`}
      >
        {" "}
        {certificationData.map((cert, index) => (
          <div className="certification-card" key={index} >
            <div className="certi-date" style={{ fontSize: !isNonMobileScreens && "0.7rem"}}> {cert.date} </div>{" "}
            <div className="certi-title" style={{ fontSize: !isNonMobileScreens && "1rem"}} > {cert.title} </div>{" "}
            <div className="certi-platform" style={{ fontSize: !isNonMobileScreens && "1rem", marginTop:!isNonMobileScreens && "0.2rem"}}> Platform: {cert.platform} </div>{" "}
            <div className="certi-instructor" style={{ fontSize: !isNonMobileScreens && "1rem", marginTop: !isNonMobileScreens && "0.2rem"}}>
              {" "}
              Instructor: {cert.instructor}{" "}
            </div>{" "}
            <div className="certi-info" style={{ fontSize: !isNonMobileScreens && "0.8rem", marginTop:!isNonMobileScreens && "0.4rem"}}> {cert.certInfo} </div>{" "}
            <a href={cert.link} className="certi-link" style={{fontSize: !isNonMobileScreens && "0.6rem", marginTop: "1rem", padding: "0.4rem 1rem"}}>
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
