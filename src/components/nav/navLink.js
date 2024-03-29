import homeIcon from "../../img/home.svg";
import AboutIcon from "../../img/About.svg";
import experienceIcon from "../../img/experience.svg";
import projectIcon from "../../img/project.svg";
import contactIcon from "../../img/cont.svg";

const links = [
  {
    id: 1,
    title: "Home ",
    icon: homeIcon,
    anchor: "/",
  },

  {
    id: 2,
    title: "About ",
    icon: AboutIcon,
    anchor: "#about",
  },

  {
    id: 3,
    title: "Experience ",
    icon: experienceIcon,
    anchor: "#experience",
  },

  {
    id: 4,
    title: "Projects ",
    icon: projectIcon,
    anchor: "#projects",
  },

  {
    id: 5,
    title: "Contact ",
    icon: contactIcon,
    anchor: "#contact",
  },

  // {
  //     id: 6,
  //     title: "Resume ",
  //     icon: resumeIcon,
  //     anchor: '#resume',
  // },
];

export default links;
