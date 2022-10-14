import React, { Component } from "react";
import "./home.css";
import {HomeSection} from "./style"



class Home extends Component {
    render(){

        return (
            <HomeSection>
               <div className="home">
                <div className="container">
                    <div className="home-information">
                        <h2 className="home-title text-center">Merhan Mohamed</h2>
                        <h4 className="home-info text-center">Creative Director</h4>
                        <p className="home-desc text-center">
                            Iam a professional <span>UX Designer</span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                        </p>
                        <button className=" m-auto d-block">Let's Begin</button>
                    </div>
                </div>
        </div>
            </HomeSection>
        )
    }
   
}

export default Home