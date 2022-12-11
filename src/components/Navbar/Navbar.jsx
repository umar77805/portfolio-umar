import React, { useState } from "react";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const sections = ["home", "about", "work", "skills", "contact"];
  return (
    <nav className="app__navbar">
      {/* <div className="app__navbar-logo">
        <img src={images.logo} alt="navbar_logo" />
      </div> */}
      <ul className="app__navbar-links">
        {sections.map((item) => (
          <li className="app__flex p-text" key={item}>
            <div></div>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt1 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [0, -100, 0] }}
            transition={{ duration: 0.75 }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {sections.map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
