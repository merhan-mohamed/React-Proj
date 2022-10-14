import React from "react";
import {AboutSection} from "./style.js"
import "./about.css"

const About = () => {
    return(
        <AboutSection >
        <div className="AboutContent">
           <p className="fs-3">This is <span className="fw-bold">Me</span></p>
           <h4 className="color fw-bold fs-2">Creative Director</h4>
           <div className="pt-3">
           <p className="paragh mb-3 lh-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatum quasi perferendis blanditiis, voluptate debitis expedita suscipit temporibus aliquid odit, placeat, velit iste cum explicabo hic. Perspiciatis reiciendis autem maiores.</p>

           <p className="paragh lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, laboriosam quibusdam? Cumque aperiam autem repellendus doloremque repellat labore minus doloribus vitae sunt cupiditate, reprehenderit ipsam vel quis, neque reiciendis voluptatibus.</p>
        </div>
        </div>
        </AboutSection>
    )
}

export default About