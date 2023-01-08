import "../App.css";
import { motion } from "framer-motion";


export default function Home() {


  
      

    return (
    <div id="hcontainer">
        <motion.div id="hcontent"
        initial={{opacity:0,height:0}}
        animate={{opacity:1,y:-30,transition:{delay:.5,duration:0.5}}}
        exit={{opacity:0,y:30,height:0,transition:{duration:.5}}}
        >
          <div id="header">Ben Duffield-Harding</div>
          <div id="sub">C r e a t i v e  |  D e v e l o p e r</div>
        </motion.div>      
    </div>
    )
  }

