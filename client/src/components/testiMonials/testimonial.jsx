import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Portpholio from "../../images/project1.png";
import Ecommerce from "../../images/Ecommerce.png";
import School from "../../images/SchoolWb.png";
import Social from "../../images/Social.png";
import stackoverflow from "../../images/Stackoverflow.png";
import "animate.css";
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from "react";

const Testimonials = () => {

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

  const cardData = [
    {
      title: "Portfolio",
      description:
        "Modern and visually appealing website crafted with HTML and CSS for a seamless user experience.",
      skills: ["HTML", "CSS"],
      image: Portpholio,
      link: "https://github.com/WajahatHussainBhat/Portfolio.git"
    },
    {
      title: "School Website",
      description:
        "Visually appealing school landing page designed with HTML and CSS exemplifying my expertise in web design and development.",
        skills: ["HTML", "CSS"],
      image: School,
      link: "https://github.com/WajahatHussainBhat/School-WS-Landing-Page.git"
    },
    {
      title: "Ecommerce Website",
      description:
        "An e-commerce masterpiece showcasing my prowess in web development and user-centric design.",
      skills: ["MERN"],
      image: Ecommerce,
      link: "https://github.com/WajahatHussainBhat/MERN-ecommerce.git"
    },
    {
      title: "SocialMedia Website",
      description:
        "A dynamic social media platform demonstrating my proficiency in web development and community engagement.",
        skills: ["MERN"],
      image: Social,
      link: "https://github.com/WajahatHussainBhat/Social-Media-website.git"
    },
    {
      title: "Stackoverflow Clone",
      description:
      "Explore our Stack Overflow clone, showcasing my expertise in web development and user-centric platforms.",
      skills: ["MERN"],
      image: stackoverflow,
      link: "https://github.com/WajahatHussainBhat/Stackoverflow-clone.git"
    },
  ];

  return (
    <section
    ref={ref}
      id="testimonial"
      className={`${animated ? 'animate__animated animate__fadeInLeft animate__slow' : " "}`}
    >
      <Slider {...settings}>
        {" "}
        {cardData.map((card, index) => (
          <div className="item" key={index}>
            <Card
              sx={{
                maxWidth: "100%",
                borderRight: "1px solid #8a2be2",
                borderBottom: "2px solid #8a2be2",
                borderRadius: "13px",
                margin: "0 10px",
                boxShadow: "0px 2px 4px #b272ee",
              }}
              className="projects-card"
              
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="170"
                  image={card.image}
                  alt={`projectImg${index}`}
                />{" "}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {" "}
                    {card.title}{" "}
                  </Typography>{" "}
                  <Typography variant="body2" color="text.secondary">
                    {" "}
                    {card.description}{" "}
                  </Typography>{" "}
                </CardContent>{" "}
              </CardActionArea>{" "}
              <CardActions className="card-skills">
                {" "}
                {card.skills.map((skill, skillIndex) => (
                  <div className="skill" key={skillIndex}>
                    {" "}
                    {skill}{" "}
                  </div>
                ))}{" "}
              </CardActions>{" "}
              <CardActions>
              <a href={card.link} className="card-codeBtn">
              {" "}
              CODE{" "}
            </a>{" "}
              </CardActions>{" "}
            </Card>{" "}
          </div>
        ))}{" "}
      </Slider>{" "}
    </section>
  );
};

export default Testimonials;
