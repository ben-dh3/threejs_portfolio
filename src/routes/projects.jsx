import React, { Component } from 'react';
import { ProjectItems } from '../components/Projects';
import "../Projects.css";
import { motion } from "framer-motion";

class Projects extends Component {
  render() {
    
    return(
      <div id="container">
        <motion.div
        id="projecthead"
        initial={{opacity:0,y:80,scale:0.5,height:0}}
        animate={{opacity:1,y:-20,scale:1,transition:{delay:.5,duration:.5}}}
        exit={{opacity:0,y:30,transition:{duration:.5}}}
        >Projects</motion.div>
        <motion.ul id="content">
          {ProjectItems.map((item, index) => {
            return(
              <motion.li key={index}
              initial={{opacity:0}}
              whileInView={{opacity:1,y:-20,transition:{delay:.1,duration:1}}}
              viewport={{once:true, amount:0.4}}
              exit={{opacity:0,y:30,transition:{duration:.5}}}
              >
                <a className={item.cName} target="_blank" href={item.url}>
                <img src={item.image} />
                  <a className="projecttitle">{item.title}</a>
                </a>
              </motion.li>
            )
          })}
        </motion.ul>
        
      </div>
    )
  }
}

export default Projects