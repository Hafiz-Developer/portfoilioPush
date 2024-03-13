import React, { useEffect, useState } from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    if (link === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(link);
      if (element) {
        const navbarHeight =
          document.querySelector(".header")?.clientHeight || 0;
        const offset = element.offsetTop - navbarHeight - 10; // Adjust as needed
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    }
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    if (!isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 0 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return storedTheme ? storedTheme === "dark" : prefersDarkMode;
  });
  useEffect(() => {
    document.body.className = isDarkMode ? "dark-theme" : "light-theme";
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <header className={`header ${stickyClass}`}>
        <div className="logo">
          <img src="/headerLogo.png" alt="" />
        </div>
        <nav>
          <ul className={`${isNavOpen ? "nav-open" : ""}`}>
            {["home", "about", "project", "services", "reviews", "contact"].map(
              (link) => (
                <li key={link}>
                  <a
                    className={`nav-link ${
                      activeLink === link ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick(link)}
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
          <div className={`triangle triangle-${activeLink}`}></div>
        </nav>
        <div className="dark-mode" onClick={toggleDarkMode}>
          {isDarkMode ? <FaRegSun /> : <FaRegMoon />}
        </div>
        <label className="burger" htmlFor="burger">
          <input type="checkbox" id="burger" onClick={toggleNav} />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </header>
    </>
  );
};

export default Navbar;
