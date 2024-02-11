import { TypeAnimation } from "react-type-animation";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const isNonMobileScreens = useMediaQuery({
    query: "(min-width:1000px)",
  });

  return (
    <div id="about" className="about" style={{ margin: !isNonMobileScreens && "2rem 0"}}>
      <div
        className="about-title"
        style={{ fontSize: !isNonMobileScreens && "0.8rem", width: !isNonMobileScreens && "7rem"}}
      >
        {" "}
        About Me{" "}
      </div>{" "}
      <TypeAnimation
        className="about-info"
        sequence={[
          "Hey there!👋 I'm Wajahat Hussain, born on July 19, 2003. I wear many hats - a programmer, competitive coder, web developer, vlogger, teacher, and a lifelong student.\n Currently pursuing my studies in Computer Engineering from Dr. D Y Patil Institute of Technology, Pune. I'm passionate about programming and web development. I thrive on exploring new technologies and learning from every experience.\n In my free time, you'll find me enjoying a game of cricket, reading books, engaging in chess battles, playing video games, and exploring new places. Music, travel, and coding are my go-to sources of inspiration.\n Whether it's about tech, life, or just sharing a good book recommendation, I'm always up for a chat. Let's connect and explore the endless possibilities!",
        ]}
        wrapper="span"
        speed={70}
        repeat={1}
        style={{
          fontSize: isNonMobileScreens ? "15px" : "9px",
          lineHeight: isNonMobileScreens ? "1.5" : "1.1",
        }}
      />{" "}
    </div>
  );
};

export default About;
