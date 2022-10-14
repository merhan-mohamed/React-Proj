import React, { Component } from "react";

import Home from "./../Home/home";
import Work from "./../Work/work";
import Portofolio from "./../Portofolio/portofolio";
import Profile from "./../Profile/profile";
import About from "./../About/about";
import Social from "./../Social/social";
import Footer from "./../Footer/footer";


class Index extends Component {
    render(){

        return (
            <div>
                <Home />
                <Work />
                <Portofolio/>
                <Profile />
                <About />
                <Social />
                <Footer /> 
                
            </div>
        )
    }
   
}

export default Index