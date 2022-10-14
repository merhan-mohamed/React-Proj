import axios from "axios";
import React, { useEffect, useState } from "react";
import "./social.css";
import {Backgrounded} from "./style.js"

const Social = () => {
    const[social , setSocial] = useState([])
    useEffect(()=>{
        axios.get("js/data.json").then(res => {
            setSocial(res.data.social)
        })
    },[])

    const mySocial = social.map((item)=> {
        return(
            <Backgrounded className="" key={item.id} item={item.id}>
               <div className="SocialContent text-center text-white my-5" >
                <div>
                <i className={item.icon} aria-hidden="true"></i>
                </div>
                <div className="ms-1 mt-3">
                <p className="fw-bold mb-0 ">{item.title}</p>
                <p>{item.body}</p>
                </div>
                </div>
            </Backgrounded>
        )

    })

    return(
        <div className="SocialSection">
            {mySocial}
        </div>
    )
    
}

export default Social