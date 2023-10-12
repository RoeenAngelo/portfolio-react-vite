import { motion } from "framer-motion";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import SocialMediaIcons from "../components/SocialMediaIcons";

import profilePic from "../assets/royosemite.png";

const Landing = ({ setSelectedPage }) => {
  return (
    <section>
      <img
        src={profilePic}
        alt="Profile Picture"
      />
    </section>
  );
};

export default Landing;
