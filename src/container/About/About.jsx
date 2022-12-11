import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { AppWrap } from "../../wrapper";
import "./About.scss";

const About = () => {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        {"<> "}The way you know{" "}
        <span>
          about me
          <br />
        </span>
        makes a <span>fine first impression</span>
        {" </>"}
      </h2>

      <div className="app__profiles works-slider">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <div className="about-about">
              <p className="p-text" style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, "about");
