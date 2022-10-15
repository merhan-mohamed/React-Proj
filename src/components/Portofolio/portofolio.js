import React , {useState, useEffect}from "react";
import axios from "axios";
import "./portofolio.css";
import { Overlay, Imagewrapper } from "./style.js";

const Portofolio = () => {
    const [images, setimages] = useState([])

    useEffect (() => {
            axios.get("js/data.json").then(res => {
                setimages(res.data.portfolio)
            })
    },[])

    const myImg = images.map((item) => {
    return(
        <div key={item.id}>
            <Imagewrapper>
                <img src="./React-Proj/{item.image}" className="d-block w-100 mt-2" alt="..." />
                <Overlay className="overlay">
                    <span>Show Image</span>
                </Overlay>

            </Imagewrapper>
        </div>
    )
        })
            


    return(
        <div>
            <div className="container">
                <h2 className="text-center mt-3">My<span>Portofolio</span></h2>
                <ul className="nav nav-pills justify-content-center ">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">All</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary" href="#">HTML</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary" href="#">Photoshop</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Wordpress</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Mobile</a>
                    </li>
                </ul>
            </div>

            <div>
                <div className="grid">
                    {myImg}
                </div>
                
            </div>

           
        </div>
    )
}

export default Portofolio