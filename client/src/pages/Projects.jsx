import { useMediaQuery } from "react-responsive";
import TestiMonials from "../components/testiMonials/testimonial.jsx";

const Projects = () => {
  const isNonMobileScreens = useMediaQuery({
    query: "(min-width:1000px)",
  });

  return (
    <div id="projects" className="projects" style={{ margin: !isNonMobileScreens && "2rem 0"}}>
      <div
        className="about-title"
        style={{ fontSize: !isNonMobileScreens && "0.8rem" , width: !isNonMobileScreens && "7rem"}}
      >
        Projects{" "}
      </div>{" "}
      <TestiMonials />
    </div>
  );
};

export default Projects;
