import React from "react";
import hero from "../src/images/hero.png";
import Common from "./Common"
const Home = () => {
    return (<>
         <Common name="Welcome to portfolio of " 
            imgsrc={hero} 
            visit="/service" 
            btname="See workflow" />
           </>)
}
export default Home;