import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <span> &lt;</span>
        <span className="app__navbar-logo-name">MistryPavanKumar</span>
        <span>/&gt;</span>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "contact", "work", "skills"].map((item) => {
          return (
            <li key={`link-${item}`} className="app__flex p-text">
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          );
        })}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />

            {["home", "about", "contact", "work", "skills"].map((item) => {
              return (
                <li key={item}>
                  <a onClick={() => setToggle(false)} href={`#${item}`}>
                    {item}
                  </a>
                </li>
              );
            })}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
