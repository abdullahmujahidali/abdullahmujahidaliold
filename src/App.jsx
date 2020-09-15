import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css"
import { Switch, Route, Redirect } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Service from "./Service"
import Navbar from "./Navbar"
import Contact from "./Contact"
import Footer from "./Footer"

const App = () => {
    return (<>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Redirect to="/" />
        </Switch>
        <Footer />
    </>)
}
export default App;