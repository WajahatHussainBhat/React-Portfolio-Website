import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);

  const isNonMobileScreens = useMediaQuery({
    query: "(min-width:1000px)",
  });

  return (
    <header className="navbar">
      <a className="logo"> Wajahat Hussain </a>{" "}
      {isNonMobileScreens ? (
        <ul className="nav-components">
          <li>
            {" "}
            <a href="#home"> Home </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a href="#about"> About </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a href="#skills"> Skills </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a href="#projects"> Projects </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a href="#contact"> Contact Us </a>{" "}
          </li>{" "}
        </ul>
      ) : (
        <MenuIcon
          id="menuIcon"
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        />
      )}{" "}
      {/* Mobile nav */}{" "}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <div className="sideMenu">
          {" "}
          {/* CLOSE ICON */}{" "}
          <div display="flex" justifyContent="flex-end" p="1rem">
            <CloseIcon
              id="closeIcon"
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            />{" "}
            {/* Menu items */}{" "}
            <ul className="menuItems">
              <li>
                {" "}
                <a> Home </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a> About </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a> Skills </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a> Projects </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a> Contact Us </a>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>
      )}{" "}
    </header>
  );
};

export default Header;
