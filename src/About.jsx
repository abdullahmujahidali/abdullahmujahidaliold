import React from "react";
import web from "../src/images/img2.gif";
import Common from "./Common";

const About = () => {
    return (
        <>
            <Common name="Welcome to About Page" 
            imgsrc={web} 
            visit="/contact" 
            btname="Contact Now" />
        </>
    )
}
export default About;