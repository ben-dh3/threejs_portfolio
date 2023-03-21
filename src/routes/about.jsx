import { motion } from "framer-motion";
import "../About.css";
import video from '../components/video.mp4';

export default function About() {
    return (
      <div id="container">
        <motion.div id="aheader"
        initial={{opacity:0,y:80,scale:0.5,height:0}}
        animate={{opacity:1,y:-20,scale:1,transition:{delay:.5,duration:.5}}}
        exit={{opacity:0,y:30,transition:{duration:.5}}}
        >About</motion.div>
        <div id="acontent">
        <motion.div id="about"
        initial={{opacity:0}}
        animate={{opacity:1,y:-20,transition:{delay:.5,duration:1}}}
        exit={{opacity:0,y:30,transition:{duration:.5}}}   
        >
        Hi, I'm Ben. Self-taught developer, and UI design enthusuast. Based in London, UK.<br></br><br></br>
        <div id="subheader">Programming Skills</div><br></br>
        Familiar with programming languages and design tools such as:<br></br><br></br>
          <ul id="skills">
            <li>Javascript</li>
            <li>React</li>
            <li>Solidity</li>
            <li>CSS</li>
            <li>THREE.js</li>
            <li>Node.js</li>
            <li>Framer motion</li>
            <li>gsap</li>
            <li>Blender</li>
            <li>Python</li>
          </ul><br></br>
        Developed my problem solving skills by building projects independently, and achieved the Free Code Camp 'Responsive web design', and 'Javascript
        algorithms and data structures' certifications. Currently working on an app incorporating
         a Python backend, REST API, and either Flask/Django framework.<br></br><br></br>
        <div id="subheader">Experience</div>
          <ul id="experience"><br></br>
            <li>Waterstones Cafe, Putney (Lead Barista) Sept 2021 – Present<br></br><br></br>
        In addition to daily tasks at this busy café, I lead the team in various ways including training new staff 
        members on using the café equipment, contributing to a relaxed and confident group. 
        Excelled at preparing coffees efficiently while working under-pressure, resulting in increased customer retention. 
        Building relationships with colleagues and customers leading to good team morale, and paramount customer satisfaction.
            </li><br></br>
            <li>Puregym, East Sheen (Personal Trainer) Dec 2020 - Sept 2021<br></br><br></br>
        Choreographing and delivering fun and engaging group exercise classes for our members, able to adapt classes to suit the needs of the group and individuals, 
        leading to improved member retention and reviews. 
        Personal trainer with particular interest in nutrition, training for hypertrophy and the positive mental effects of exercise.
            </li><br></br>
            <li>Holland And Barrett, Richmond and Stratford-Upon-Avon (Supervisor) June 2018 – July 2021<br></br><br></br>
        I enjoyed learning how to get the best out of my team in my role as supervisor at Holland and Barrett. 
        While building relationships with regular customers and advising them on supplements, diet and lifestyle regarding their health goals, 
        leading to improved customer service reviews and a happy, motivated team.
            </li>
          </ul>
        <br></br>
        <div id="subheader">Interests</div><br></br>
        Interested in investing, with a good understanding of cryptocurrency, DAPPS, and blockchain design.
        My brother works as a developer and we work together on coding problems 
        with resources such as codingame.<br></br><br></br>
        Other interests include travelling - Australia, Thailand, Laos, Vietnam,
        Cambodia, Bali, Phillipines. Gym, Judo, and playing chess.<br></br><br></br>
        </motion.div>  
        <motion.div id="video"
        initial={{opacity:0}}
        animate={{opacity:1,y:-20,transition:{delay:.5,duration:1}}}
        exit={{opacity:0,y:30,transition:{duration:.5}}} 
        >
        <video src={video} width="600" height="500" autoPlay loop >
        </video>
          <p id="videotitle">Morphing object made using geometry nodes in Blender</p>
        </motion.div>
        
        </div>
      </div>
    )
  }