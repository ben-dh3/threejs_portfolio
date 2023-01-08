import React from 'react'
import {
    Route,
    Routes,
    useLocation
} from "react-router-dom"
import Projects from "./projects";
import About from "./about";
import Home from "./home";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />  
                <Route path="/about" element={<About />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes