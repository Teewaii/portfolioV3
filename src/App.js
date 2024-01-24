import { useState } from "react";
import Hero from "./components/hero/Hero";
import SideNav from "./components/nav/SideNav";
import Socials from "./components/socials/Socials";
import hamburger from "./img/hamburger.svg";
import close from "./img/close.svg";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import "./App.css";
import ScrollToTop from "react-scroll-to-top";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import TopNav from "./components/nav/TopNav";
import OverLay from "./components/OverLay";

function App() {
  const [toggle, setToggle] = useState(true);

  function toggleMenu() {
    setToggle((prev) => !prev);
  }

  const [project, setProject] = useState(0);

  function activeProject(index) {
    if (project === index) {
      return setProject(1);
    }
    setProject(index);
  }
  const [shadow, setShadow] = useState(false);
  function NavShadow() {
    if (window.scrollY >= 120) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  }
  window.addEventListener("scroll", NavShadow);

  return (
    <main className={toggle ? "App relative " : "h-[100vh] overflow-hidden"}>
      <div className="navi z-[200]">
        <SideNav
          toggle={toggle}
          toggleMenu={toggleMenu}
          setToggle={setToggle}
        />
      </div>
      <Hero />
      <About />
      <Experience />
      <Projects project={project} activeProject={activeProject} />
      <Footer />
      <Socials />
      <ScrollToTop
        style={{ color: "#00007A", width: "50px", height: "50px" }}
        smooth
        component={<ChevronUpIcon />}
      />
      <OverLay toggle={toggle} toggleMenu={toggleMenu} />

      <TopNav
        toggleMenu={toggleMenu}
        shadow={shadow}
        toggle={toggle}
        hamburger={hamburger}
        close={close}
      />
    </main>
  );
}

export default App;
