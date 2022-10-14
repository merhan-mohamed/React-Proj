import axios from "axios";
import React, { useEffect, useState } from "react";
import "./profile.css";
import ProgressBar from 'react-bootstrap/ProgressBar';

const Profile = () => {
    const[skills, setSkills] = useState([])
    useEffect(() => {
        axios.get("js/data.json").then(res => {
            setSkills(res.data.Profile)
        })
    },[])

    const mySkills = skills.map((item)=> {
       
        return(
            <div key={item.id} >
                <ul className="list-unstyled">
                    <div>
                        <li>{item.name}</li>
                    </div>
                    <div>
                        <ProgressBar now={item.precentage} label={`${item.precentage}%`} />
                    </div>

                       
                </ul>
            </div>

            )
    })

    
    return(
        <div className="container mt-3">
            <div className="profileContent">
            <div className="profileSection">
                <h2>
                    My<span>Profile</span>
                </h2>
                    <div className="d-flex align-items-center">
                    <ul className="list-unstyled mt-5">
                    <li>Name</li>
                    <li>Birthday</li>
                    <li>Address</li>
                    <li>Phone</li>
                    <li>Email</li>
                    <li>Website</li>
                    </ul>
                    <ul className="list-unstyled mt-5 ms-5">
                    <li>Merhan Mohamed</li>
                    <li>1/11/111</li>
                    <li>Address</li>
                    <li>4444 5555-6666</li>
                    <li className="styled">merhan_mohamed89@hotmail.com</li>
                    <li>Website</li>
                    </ul>
                    </div>
            </div>
            <div className="skills">
                    <h2>
                        <span>Some</span>skills
                    </h2>
                <div>
                <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quae repellendus similique modi neque consequuntur iure! Similique, et sunt veniam incidunt ullam quisquam, consequuntur eligendi delectus earum eum, maxime harum.</p>
                </div>
                <div> {mySkills}</div>

            </div>

            </div>
        </div>
    )
}

export default Profile