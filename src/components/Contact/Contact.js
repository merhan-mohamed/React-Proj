import React from "react";
import Footer from "../Footer/footer";

const Contact = () => {
    return(
        <React.Fragment>
        <div className="container">
           <h1 className="text-center">Drop<span> Me A line</span></h1>
           <form>
                <div className="d-flex justify-content-between align-items-center">
                        <input type="text" class="form-control my-3 me-2" placeholder="Your Name"/>
                        <input type="email" class="form-control my-3" placeholder="Your Email" />
                 </div>
                <input type="text" class="form-control my-3" placeholder="Your Subject" />
                <textarea class="form-control my-3" rows="10" colums="30" placeholder="Your Message"></textarea>
                <div className="text-center">
                <input type="submit" value="Send Message" className="w-50" />
                </div>
           </form>
        </div>
        <Footer/>
        </React.Fragment>
        
    )

    
}

export default Contact